package bitcamp.java89.ems.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.ems.dao.BidHistoryDao;
import bitcamp.java89.ems.domain.BidHistory;
import bitcamp.java89.ems.service.BidHistoryService;

@Service
public class BidHistoryServiceImpl implements BidHistoryService {
  @Autowired
  BidHistoryDao bidHistoryDao;

  @Override
  public List<BidHistory> getNowBidHistory(int itemNo) throws Exception {
    return bidHistoryDao.getNowBidHistory(itemNo);
  }

  @Override
  public int add(BidHistory bid) throws Exception {
    return bidHistoryDao.insert(bid);
  }
}