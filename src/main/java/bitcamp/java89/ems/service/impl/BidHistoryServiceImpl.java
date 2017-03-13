package bitcamp.java89.ems.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.ems.dao.BidHistoryDao;
import bitcamp.java89.ems.domain.BidHistory;
import bitcamp.java89.ems.service.BidHistoryService;

@Service
public class BidHistoryServiceImpl implements BidHistoryService {
  @Autowired BidHistoryDao bidHistoryDao;

  @Override
  public List<BidHistory> getNowBidHistory(int itemNo) throws Exception {
    return bidHistoryDao.getNowBidHistory(itemNo);
  }

  @Override
  public int add(BidHistory bid) throws Exception {
    return bidHistoryDao.insert(bid);
  }

  @Override
  public List<BidHistory> getBeforeBidHistory() throws Exception {
    return bidHistoryDao.getBeforeBidHistory();
  }

  @Override
  public int updateState(int itemNo, int bids, int state) throws Exception {
    HashMap<String,Object> paramMap = new HashMap<>();
    paramMap.put("itemNo", itemNo);
    paramMap.put("bids", bids);
    paramMap.put("state", state);
    return bidHistoryDao.updateState(paramMap);
  }

  @Override
  public int getOrderStatus(int itemNo, int bids) throws Exception {
    HashMap<String,Object> paramMap = new HashMap<>();
    paramMap.put("itemNo", itemNo);
    paramMap.put("bids", bids);
    return bidHistoryDao.getState(paramMap);
  }

}