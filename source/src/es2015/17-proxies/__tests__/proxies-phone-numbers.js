import test from 'tape';

test('es2015 \ 17-proxies \ proxies phone numbers', (t) => {

  t.plan(1);

  const phoneHandler = {
    set(target, name, value) {
      return target[name] = value.match(/[0-9]/g).join('');
    },
    get(target, name) {
      return target[name].replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3');
    }
  }
  const phoneNumbers = new Proxy({}, phoneHandler);
  phoneNumbers.value = '1234567890';
  t.equal(phoneNumbers.value, '(123)-456-7890');

});
