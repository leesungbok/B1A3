package bitcamp.java89.ems.dao;

import java.util.ArrayList;
import java.util.List;

import bitcamp.java89.ems.domain.BidHistory;
import bitcamp.java89.ems.domain.Item;

public interface ItemDao {
  ArrayList<Item> getList() throws Exception;
  Item getNowBid() throws Exception;
  Item getOne(int memberNo) throws Exception;
  List<BidHistory> getNowBidHistory (int itemNo) throws Exception;
  int countByNo(int memberNo) throws Exception;
  int insert(Item item) throws Exception;
  int insertPhoto(Item item) throws Exception;
  int update(Item item) throws Exception;
  int delete(int itemNo) throws Exception;
}