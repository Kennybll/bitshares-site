export default (type: string) => {
  return {
    start: `${type}_START`,
    finish: `${type}_FINISH`,
    error: `${type}_ERROR`
  }
}