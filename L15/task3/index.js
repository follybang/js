export function createLogger() {
  const memory = [];

  function warn(text) {
    memory.unshift({
      message: text,
      type: 'warn',
      dateTime: new Date(),
    });
  }

  function error(text) {
    memory.unshift({
      message: text,
      type: 'error',
      dateTime: new Date(),
    });
  }

  function log(text) {
    memory.unshift({
      message: text,
      type: 'log',
      dateTime: new Date(),
    });
  }

  function getRecords(type) {
    if (type === 'warn') {
      return memory.filter(el => el.type === 'warn');
    } else if (type === 'error') {
      return memory.filter(el => el.type === 'error');
    } else if (type === 'log') {
      return memory.filter(el => el.type === 'log');
    } else {
      return memory;
    }
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
}

const logger = createLogger();
logger.log('User logged in');
logger.warn('User is tring to ented restricted page');
logger.log('User logged out');
console.log(logger.getRecords('warn'));
console.log(logger.getRecords('log'));
console.log(logger.getRecords('error'));
console.log(logger.getRecords());
