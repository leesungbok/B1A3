package ems.control.domain;

import java.io.Serializable;

public class Biddingdata implements Serializable{
  private static final long serialVersionUID = 1L;
  
  protected int biddingdataNo;
  protected int biddingPrice;
  protected String biddingTime;
  
  
  public int getBiddingdataNo() {
    return biddingdataNo;
  }
  public void setBiddingdataNo(int biddingdataNo) {
    this.biddingdataNo = biddingdataNo;
  }
  public int getBiddingPrice() {
    return biddingPrice;
  }
  public void setBiddingPrice(int biddingPrice) {
    this.biddingPrice = biddingPrice;
  }
  public String getBiddingTime() {
    return biddingTime;
  }
  public void setBiddingTime(String biddingTime) {
    this.biddingTime = biddingTime;
  }
  
  

}
