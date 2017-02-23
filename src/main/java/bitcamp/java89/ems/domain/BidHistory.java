package bitcamp.java89.ems.domain;

import java.io.Serializable;

public class BidHistory extends Item implements Serializable {
  private static final long serialVersionUID = 1L;

  protected int    bidHistoryNo;
  protected int    bids;
  protected String bidTime;

  public int getBids() {
    return bids;
  }

  public void setBids(int bids) {
    this.bids = bids;
  }

  public int getBidHistoryNo() {
    return bidHistoryNo;
  }

  public void setBidHistoryNo(int bidHistoryNo) {
    this.bidHistoryNo = bidHistoryNo;
  }

  public String getBidTime() {
    return bidTime;
  }

  public void setBidTime(String bidTime) {
    this.bidTime = bidTime;
  }
}