function isCedula$1(n) {
  return (
    'string' == typeof n &&
    (11 === (n = n.replace(/[^\d]/g, '')).length &&
      (exceptions.indexOf(n) > -1 || luhn(n)))
  )
}
function isRnc$1(n) {
  return (
    'string' == typeof n &&
    (9 === (n = n.replace(/[^\d]/g, '')).length && customLuhn(n))
  )
}
function customLuhn(n) {
  n = n.split('').map(function(n) {
    return parseInt(n, 10)
  })
  for (
    var e = [7, 9, 8, 6, 5, 4, 3, 2], t = 0, r = e.length - 1;
    r >= 0;
    r -= 1
  )
    t += e[r] * n[r]
  var u = t % 11
  return (0 === u ? 2 : 1 === u ? 1 : 11 - u) === n.pop()
}
import luhn from 'luhn-alg'
var exceptions = [
    '00000000018',
    '11111111123',
    '00100759932',
    '00105606543',
    '00114272360',
    '00200123640',
    '00200409772',
    '00800106971',
    '01200004166',
    '01400074875',
    '01400000282',
    '03103749672',
    '03200066940',
    '03800032522',
    '03900192284',
    '04900026260',
    '05900072869',
    '07700009346',
    '00114532330',
    '03121982479',
    '40200700675',
    '40200639953',
    '00121581750',
    '00119161853',
    '22321581834',
    '00121581800',
    '09421581768',
    '22721581818',
    '90001200901',
    '00301200901',
    '40200452735',
    '40200401324',
    '10621581792'
  ],
  SDQ = { isCedula: isCedula$1, isRnc: isRnc$1 }
export default SDQ
//# sourceMappingURL=sdq.esm.js.map
