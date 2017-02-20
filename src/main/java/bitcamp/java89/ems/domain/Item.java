package bitcamp.java89.ems.domain;

import java.io.Serializable;
import java.util.List;

public class Item implements Serializable{
  private static final long serialVersionUID = 1L;
  
  protected int itemNo;
  protected int memberNo;
  protected String title;
  protected String category;
  protected String buyDate;
  protected int useDay;
  protected String deal;
  protected String content;
  protected String startTime;
  protected int startPrice;
  protected List<Photo> photoList;
  
  public List<Photo> getPhotoList() {
    return photoList;
  }
  public void setPhotoList(List<Photo> photoList) {
    this.photoList = photoList;
  }
  public int getMemberNo() {
    return memberNo;
  }
  public void setMemberNo(int memberNo) {
    this.memberNo = memberNo;
  }
  public int getItemNo() {
    return itemNo;
  }
  public void setItemNo(int itemNo) {
    this.itemNo = itemNo;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public String getCategory() {
    return category;
  }
  public void setCategory(String category) {
    this.category = category;
  }
  public String getBuyDate() {
    return buyDate;
  }
  public void setBuyDate(String buyDate) {
    this.buyDate = buyDate;
  }
  public int getUseDay() {
    return useDay;
  }
  public void setUseDay(int useDay) {
    this.useDay = useDay;
  }
  public String getDeal() {
    return deal;
  }
  public void setDeal(String deal) {
    this.deal = deal;
  }
  public String getContent() {
    return content;
  }
  public void setContent(String content) {
    this.content = content;
  }
  public String getStartTime() {
    return startTime;
  }
  public void setStartTime(String startTime) {
    this.startTime = startTime;
  }
  public int getStartPrice() {
    return startPrice;
  }
  public void setStartPrice(int startPrice) {
    this.startPrice = startPrice;
  }
  

}