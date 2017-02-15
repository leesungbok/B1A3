package ems.control.domain;

import java.io.Serializable;

public class Member implements Serializable{
  private static final long serialVersionUID = 1L;
  
  protected int memberNo;
  protected String nicName;
  protected String tel;
  protected String email;
  protected String password;
  protected String phoneNo;
  protected String postNo;
  protected String basicAddress;
  protected String detailAddress;
  protected String photoPath;
  protected String facebook;
  protected String kakao;
  protected String naver;
  
  
  public int getMemberNo() {
    return memberNo;
  }
  public void setMemberNo(int memberNo) {
    this.memberNo = memberNo;
  }
  public String getNicName() {
    return nicName;
  }
  public void setNicName(String nicName) {
    this.nicName = nicName;
  }
  public String getTel() {
    return tel;
  }
  public void setTel(String tel) {
    this.tel = tel;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  public String getPhoneNo() {
    return phoneNo;
  }
  public void setPhoneNo(String phoneNo) {
    this.phoneNo = phoneNo;
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
  public String getPhotoPath() {
    return photoPath;
  }
  public void setPhotoPath(String photoPath) {
    this.photoPath = photoPath;
  }
  public String getFacebook() {
    return facebook;
  }
  public void setFacebook(String facebook) {
    this.facebook = facebook;
  }
  public String getKakao() {
    return kakao;
  }
  public void setKakao(String kakao) {
    this.kakao = kakao;
  }
  public String getNaver() {
    return naver;
  }
  public void setNaver(String naver) {
    this.naver = naver;
  }
  
  
  

}
