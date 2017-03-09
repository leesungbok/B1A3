package bitcamp.java89.ems.domain;

import java.io.Serializable;

public class Chat implements Serializable{
  private static final long serialVersionUID = 1L;
  
  protected int chatNo;
  protected int chatSubject;
  protected int chatObject;
  protected String contecnt;
  protected String transferTime;
  
  public int getChatNo() {
    return chatNo;
  }
  public void setChatNo(int chatNo) {
    this.chatNo = chatNo;
  }
  public int getChatSubject() {
    return chatSubject;
  }
  public void setChatSubject(int chatSubject) {
    this.chatSubject = chatSubject;
  }
  public int getChatObject() {
    return chatObject;
  }
  public void setChatObject(int chatObject) {
    this.chatObject = chatObject;
  }
  public String getContecnt() {
    return contecnt;
  }
  public void setContecnt(String contecnt) {
    this.contecnt = contecnt;
  }
  public String getTransferTime() {
    return transferTime;
  }
  public void setTransferTime(String transferTime) {
    this.transferTime = transferTime;
  }
  
  

}
