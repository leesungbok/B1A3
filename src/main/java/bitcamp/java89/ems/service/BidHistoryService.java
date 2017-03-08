package bitcamp.java89.ems.service;

import java.util.List;

import bitcamp.java89.ems.domain.BidHistory;

public interface BidHistoryService {
  List<BidHistory> getNowBidHistory(int itemNo) throws Exception;
  List<BidHistory> getBeforeBidHistory() throws Exception;
  int getOrderStatus(int itemNo, int bids) throws Exception;
  int add(BidHistory bid) throws Exception;
  int updateState(int itemNo, int bids, int state) throws Exception;
}