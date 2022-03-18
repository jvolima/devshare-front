import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";
import { signOut } from "../contexts/AuthContext";
import { AuthTokenError } from "./errors/AuthTokenError";

let isRefreshing = false;
let failedRequestsQueue = [];

export function setupApiClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
      Authorization: `Bearer ${cookies['devshare.token']}`
    }
  });

  api.interceptors.response.use(response => {
    return response
  }, (error: AxiosError) => {
    if(error.response.status === 401) {
      if(error.response.data?.message === 'Invalid token!') {
        cookies = parseCookies(ctx);
        
        const { 'devshare.refresh_token': refresh_token } = cookies;
        const originalConfig = error.config;

        if(!isRefreshing) {
          isRefreshing = true;

          api.post('users/session/refresh-token', {
            refresh_token
          }).then(response => {
            const { token } = response.data;

            setCookie(ctx, 'devshare.token', token, {
              maxAge: 60 * 60 * 24 * 30, //30 dias
              path: '/'
            });

            setCookie(ctx, 'devshare.refresh_token', response.data.refresh_token, {
              maxAge: 60 * 60 * 24 * 30, //30 dias
              path: '/'
            });

            api.defaults.headers['Authorization'] = `Bearer ${token}`;

            failedRequestsQueue.forEach(request => request.onSucces(token));
            failedRequestsQueue = [];
          }).catch((err) => {
            failedRequestsQueue.forEach(request => request.onFailure(err));
            failedRequestsQueue = [];

            if(process.browser) {
              signOut();
            }
          }).finally(() => {
            isRefreshing = false;
          })
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSucces: (token: string) => {
              originalConfig.headers['Authorization'] = `Bearer ${token}`;

              resolve(api(originalConfig));
            }, 
            onFailure: (err: AxiosError) => {
              reject(err)
            }
          })
        })
      } else {
        if(process.browser) {
          signOut()
        } else {
          return Promise.reject(new AuthTokenError());
        }
      }
    } else {
      throw new Error('error')
    }
  })

  return api;
}