export default [
  // 30sec
  [/^[0-9]+(min|sec|hr|d)s?$/i, 'Duration', '30min'],
  // 2012-06
  [/^[0-9]{4}-[0-9]{2}$/, 'Date', '2012-06'],
  // 13h30
  [/^[0-9]{2}h[0-9]{2}$/i, 'Time', '13h30'],
  // @4:30
  [/^@[0-9]+:[0-9]{2}$/, 'Time', '@5:30'],
  // @4pm
  [/^@[1-9]+(am|pm)$/, 'Time', '@5pm'],
  // 03/02
  [/^(?:0[1-9]|[12]\d|3[01])\/(?:0[1-9]|[12]\d|3[01])$/, 'Date', '03/02'],
  // iso-time
  // [/^[0-9]{4}[:-][0-9]{2}[:-][0-9]{2}T[0-9]/i, 'Time', 'iso-time-tag']

]
