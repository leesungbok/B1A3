package bitcamp.java89.ems.service;

import java.util.List;

import bitcamp.java89.ems.domain.MyBid;

public interface MyBidService {
  List<MyBid> getMyBidList(int memberNo) throws Exception;
  int delete(int itemNo) throws Exception;

}
