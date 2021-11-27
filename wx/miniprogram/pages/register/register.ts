// pages/register/register.ts
Page({
  data: {
    licNo: '',
    name: '',
    genderIndex: 0,
    genders: ['未知', '男', '女'],
    birthDate: '1990-01-01',
    licImgURL: '',
    state: 'UNSUBMITTED' as 'UNSUBMITTED' | 'PENDING' | 'VERIFIED',
  },
  onUploadLic() {
    wx.chooseImage({
      success: res => {
        if (res.tempFilePaths.length > 0) {
          this.setData({
            licImgURL: res.tempFilePaths[0],
          })
        }
      }
    })
  },
  onGenderChange(e: any) {
    this.setData({
      genderIndex: parseInt(e.detail.value),
    })
  },
  onBirthDateChange(e: any) {
    this.setData({
      birthDate: e.detail.value,
    })
  },
  onSubmit() {
    this.setData({
      state: 'PENDING'
    })
    setTimeout(() => {
      this.onLicVerified()
    }, 3000)
  },
  onResubmit() {
    this.setData({
      state: 'UNSUBMITTED',
      licImgURL: '',
    })
  },
  onLicVerified() {
    this.setData({
      state: 'VERIFIED'
    })
    wx.redirectTo({
      url: '/pages/lock/lock',
    })
  },
})