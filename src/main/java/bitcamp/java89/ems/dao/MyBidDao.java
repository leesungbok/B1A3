package bitcamp.java89.ems.dao;

import java.util.List;

import bitcamp.java89.ems.domain.MyBid;

public interface MyBidDao {
  List<MyBid> getMyBidList(int memberNo) throws Exception;
  int delete(int itemNo) throws Exception;

}
