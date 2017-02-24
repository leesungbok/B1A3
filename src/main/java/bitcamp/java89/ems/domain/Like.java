package bitcamp.java89.ems.domain;

import java.io.Serializable;

public class Like extends Item implements Serializable{
  private static final long serialVersionUID = 1L;
  
  protected int type;
  protected String readTime;
  
  
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

}
