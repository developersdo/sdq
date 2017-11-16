!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd ? define(t) : (e.sdq = t())
})(this, function() {
  'use strict'
  function e() {
    throw new Error(
      'Dynamic requires are not currently supported by rollup-plugin-commonjs'
    )
  }
  function t(e) {
    return (
      'string' == typeof e &&
      (9 === (e = e.replace(/[^\d]/g, '')).length &&
        (function(e) {
          e = e.split('').map(function(e) {
            return parseInt(e, 10)
          })
          for (
            var t = [7, 9, 8, 6, 5, 4, 3, 2], n = 0, r = t.length - 1;
            r >= 0;
            r -= 1
          )
            n += t[r] * e[r]
          var o = n % 11,
            u = void 0
          u = 0 === o ? 2 : 1 === o ? 1 : 11 - o
          return u === e.pop()
        })(e))
    )
  }
  var n = (function(e) {
      return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, 'default')
        ? e.default
        : e
    })(
      (function(e, t) {
        return (t = { exports: {} }), e(t, t.exports), t.exports
      })(function(t, n) {
        t.exports = (function t(n, r, o) {
          function u(i, p) {
            if (!r[i]) {
              if (!n[i]) {
                var c = 'function' == typeof e && e
                if (!p && c) return c(i, !0)
                if (f) return f(i, !0)
                var s = new Error("Cannot find module '" + i + "'")
                throw ((s.code = 'MODULE_NOT_FOUND'), s)
              }
              var a = (r[i] = { exports: {} })
              n[i][0].call(
                a.exports,
                function(e) {
                  var t = n[i][1][e]
                  return u(t || e)
                },
                a,
                a.exports,
                t,
                n,
                r,
                o
              )
            }
            return r[i].exports
          }
          for (var f = 'function' == typeof e && e, i = 0; i < o.length; i++)
            u(o[i])
          return u
        })(
          {
            1: [
              function(e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }),
                  (n.default = (function(e) {
                    return function(t) {
                      for (var n = t ? t.length : 0, r = 1, o = 0; n--; )
                        o += (r ^= 1) ? e[t[n]] : parseInt(t[n], 10)
                      return o % 10 == 0 && o > 0
                    }
                  })([0, 2, 4, 6, 8, 1, 3, 5, 7, 9])),
                  (t.exports = n.default)
              },
              {}
            ]
          },
          {},
          [1]
        )(1)
      })
    ),
    r = [
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
    ]
  return {
    isCedula: function(e) {
      return (
        'string' == typeof e &&
        11 === (e = e.replace(/[^\d]/g, '')).length &&
        (r.indexOf(e) > -1 || n(e))
      )
    },
    isRnc: t
  }
})
//# sourceMappingURL=sdq.umd.js.map
