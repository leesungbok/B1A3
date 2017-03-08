package bitcamp.java89.ems.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java89.ems.domain.BidHistory;

public interface BidHistoryDao {
  List<BidHistory> getNowBidHistory(int itemNo) throws Exception;
  List<BidHistory> getBeforeBidHistory() throws Exception;
  int getState(Map<String,Object> paramMap) throws Exception;
  int insert(BidHistory bid) throws Exception;
  int updateState(Map<String,Object> paramMap) throws Exception;
}