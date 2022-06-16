function humanReadable (seconds) {
  let result = new Date(seconds * 1000);
  let h = seconds >= 3600 ? `${(Math.floor(seconds / 3600))}`: '00'
  let hh = h.length > 1 ? h: `0${h}`
  let mm = `${result.getMinutes()}`.length > 1 ? result.getMinutes(): `0${result.getMinutes()}`;
  let ss = `${result.getSeconds()}`.length > 1 ? result.getSeconds(): `0${result.getSeconds()}`;
  
  return `${hh}:${mm}:${ss}`
}