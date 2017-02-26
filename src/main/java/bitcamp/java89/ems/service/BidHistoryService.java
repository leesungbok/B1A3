package bitcamp.java89.ems.service;

import java.util.List;

import bitcamp.java89.ems.domain.BidHistory;

public interface BidHistoryService {
  List<BidHistory> getNowBidHistory(int itemNo) throws Exception;
  int add(BidHistory bid) throws Exception;
}