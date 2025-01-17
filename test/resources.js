describe('resources', function () {
  let $tool = $('.eruda-resources')

  beforeEach(function () {
    eruda.show('resources')
  })

  describe('localStorage', function () {
    it('show', function () {
      localStorage.clear()
      localStorage.setItem('testKey', 'testVal')
      $tool.find('.eruda-local-storage .eruda-refresh-storage').click()
      expect($tool.find('.eruda-local-storage')).toContainText('testKey')
    })

    it('clear', function () {
      $tool.find('.eruda-local-storage .eruda-clear-storage').click()
      expect($tool.find('.eruda-local-storage')).toContainText('Empty')
    })
  })

  describe('sessionStorage', function () {
    it('show', function () {
      sessionStorage.clear()
      sessionStorage.setItem('testKey', 'testVal')
      $tool.find('.eruda-session-storage .eruda-refresh-storage').click()
      expect($tool.find('.eruda-session-storage')).toContainText('testKey')
    })

    it('clear', function () {
      $tool.find('.eruda-session-storage .eruda-clear-storage').click()
      expect($tool.find('.eruda-session-storage')).toContainText('Empty')
    })
  })

  describe('cookie', function () {
    it('show', function () {
      util.cookie.set('testKey', 'testVal')
      $tool.find('.eruda-refresh-cookie').click()
      expect($tool.find('.eruda-cookie')).toContainText('testKey')
    })

    it('clear', function () {
      $tool.find('.eruda-clear-cookie').click()
      expect($tool.find('.eruda-cookie')).toContainText('Empty')
    })
  })
})
