const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat('pt-BR').format(new Date(date));

export default formatDate;
