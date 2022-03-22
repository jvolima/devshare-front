export function compareTime(date: Date) {
  const dateInCorrectedFormat = new Date(date);
  
  if((new Date().getDay() - dateInCorrectedFormat.getDay()) <= 0) {
    if((new Date().getHours() - dateInCorrectedFormat.getHours()) <= 0) {
      if((new Date().getMinutes() - dateInCorrectedFormat.getMinutes()) <= 0) {
        if((new Date().getSeconds() - dateInCorrectedFormat.getSeconds()) <= 0) {
          return 'Publicado agora'
        } else {
          return `${new Date().getSeconds() - dateInCorrectedFormat.getSeconds()} segundos atrás` 
        }
      } else {
        return `${new Date().getMinutes() - dateInCorrectedFormat.getMinutes()} minutos atrás` 
      }
    } else {
      return `${new Date().getHours() - dateInCorrectedFormat.getHours()} horas atrás`
    }
  } else {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "short",
    }).format(new Date(date))
  }
} 