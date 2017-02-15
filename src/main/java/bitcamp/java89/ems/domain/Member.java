package bitcamp.java89.ems.domain;

import java.io.Serializable;

public class Member implements Serializable {
  private static final long serialVersionUID = 1L;

  protected int    membmerNo;
  protected String email;
  protected String nickName;
  protected String phoneNo;
  protected String password;
  protected String photoPath;
  protected String postNo;
  protected String basicAddress;
  protected String detailAddress;
  protected String telphone;
  protected String facebook;
  protected String kakaoTalk;
  protected String naver;

  public int getMembmerNo() {
    return membmerNo;
  }

  public void setMembmerNo(int membmerNo) {
    this.membmerNo = membmerNo;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getNickName() {
    return nickName;
  }

  public void setNickName(String nickName) {
    this.nickName = nickName;
  }

  public String getPhoneNo() {
    return phoneNo;
  }

  public void setPhoneNo(String phoneNo) {
    this.phoneNo = phoneNo;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getPhotoPath() {
    return photoPath;
  }

  public void setPhotoPath(String photoPath) {
    this.photoPath = photoPath;
  }

  public String getPostNo() {
    return postNo;
  }

  public void setPostNo(String postNo) {
    this.postNo = postNo;
  }

  public String getBasicAddress() {
    return basicAddress;
  }

  public void setBasicAddress(String basicAddress) {
    this.basicAddress = basicAddress;
  }

  public String getDetailAddress() {
    return detailAddress;
  }

  public void setDetailAddress(String detailAddress) {
    this.detailAddress = detailAddress;
  }

  public String getTelphone() {
    return telphone;
  }

  public void setTelphone(String telphone) {
    this.telphone = telphone;
  }

  public String getFacebook() {
    return facebook;
  }

  public void setFacebook(String facebook) {
    this.facebook = facebook;
  }

  public String getKakaoTalk() {
    return kakaoTalk;
  }

  public void setKakaoTalk(String kakaoTalk) {
    this.kakaoTalk = kakaoTalk;
  }

  public String getNaver() {
    return naver;
  }

  public void setNaver(String naver) {
    this.naver = naver;
  }
}