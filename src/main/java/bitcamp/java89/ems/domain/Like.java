package bitcamp.java89.ems.domain;

import java.io.Serializable;
import java.util.List;

public class Like implements Serializable{
  private static final long serialVersionUID = 1L;
  
  protected int type;
  protected String readTime;
  protected List<Item> itemList;
  
  
  public int getType() {
    return type;
  }
  public void setType(int type) {
    this.type = type;
  }
  public String getReadTime() {
    return readTime;
  }
  public void setReadTime(String readTime) {
    this.readTime = readTime;
  }
  public List<Item> getItemList() {
    return itemList;
  }
  public void setItemList(List<Item> itemList) {
    this.itemList = itemList;
  }
  @Override
  public String toString() {
    return "Like [type=" + type + ", readTime=" + readTime
        + ", itemList=" + itemList + "]";
  }
  

}
