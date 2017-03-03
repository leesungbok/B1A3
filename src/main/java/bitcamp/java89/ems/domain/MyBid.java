package bitcamp.java89.ems.domain;

import java.io.Serializable;
import java.util.List;

public class MyBid extends Item implements Serializable{
private static final long serialVersionUID = 1L;

protected int hsNo; // 입찰기록 일련번호
protected int bids; //입찰가
protected String time; //입찰시간
protected List<Photo> photoList;


public int getHsNo() {
return hsNo;
}
public void setHsNo(int hsNo) {
this.hsNo = hsNo;
}
public int getBids() {
return bids;
}
public void setBids(int bids) {
this.bids = bids;
}
public String getTime() {
return time;
}
public void setTime(String time) {
this.time = time;
}
public List<Photo> getPhotoList() {
return photoList;
}
public void setPhotoList(List<Photo> photoList) {
this.photoList = photoList;
}

@Override
public String toString() {
return "MyBid [hsNo=" + hsNo + ", bids=" + bids + ", time=" + time + ", photoList=" + photoList + "]";
}

}

