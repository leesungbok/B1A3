-- 회원 데이터
insert into memb(mno, email, nknm, phon, pwd) values(1, 'haha1@naver.com', '판매자', '010-1111-2222', password('1111'));
insert into memb(mno, email, nknm, phon, pwd) values(2, 'haha2@naver.com', '판매자1', '010-1111-2223', password('1111'));
insert into memb(mno, email, nknm, phon, pwd) values(3, 'haha3@naver.com', '판매자2', '010-1111-2224', password('1111'));
insert into memb(mno, email, nknm, phon, pwd) values(4, 'haha4@naver.com', '판매자3', '010-1111-2225', password('1111'));
insert into memb(mno, email, nknm, phon, pwd) values(5, 'haha5@naver.com', '판매자4', '010-1111-2226', password('1111'));
insert into memb(mno, email, nknm, phon, pwd) values(6, 'haha6@naver.com', '판매자5', '010-1111-2227', password('1111'));
insert into memb(mno, email, nknm, phon, pwd) values(7, 'haha7@naver.com', '판매자6', '010-1111-2228', password('1111'));
insert into memb(mno, email, nknm, phon, pwd) values(8, 'haha8@naver.com', '판매자7', '010-1111-2229', password('1111'));
insert into memb(mno, email, nknm, phon, pwd) values(9, 'haha9@naver.com', '판매자8', '010-1111-2230', password('1111'));
insert into memb(mno, email, nknm, phon, pwd) values(10, 'haha10@naver.com', '판매자9', '010-1111-2231', password('1111'));
insert into memb(mno, email, nknm, phon, pwd) values(11, 'haha11@naver.com', '입찰자', '010-2220-2231', password('1111'));
insert into memb(mno, email, nknm, phon, pwd) values(12, 'haha12@naver.com', '입찰자1', '010-2221-2231', password('1111'));
insert into memb(mno, email, nknm, phon, pwd) values(13, 'haha13@naver.com', '입찰자2', '010-2222-2231', password('1111'));
insert into memb(mno, email, nknm, phon, pwd) values(14, 'haha14@naver.com', '입찰자3', '010-2223-2231', password('1111'));
insert into memb(mno, email, nknm, phon, pwd) values(15, 'haha15@naver.com', '입찰자4', '010-2224-2231', password('1111'));
insert into memb(mno, email, nknm, phon, pwd) values(16, 'haha16@naver.com', '입찰자5', '010-2225-2231', password('1111'));
insert into memb(mno, email, nknm, phon, pwd) values(17, 'haha17@naver.com', '입찰자6', '010-2226-2231', password('1111'));
insert into memb(mno, email, nknm, phon, pwd) values(18, 'haha18@naver.com', '입찰자7', '010-2227-2231', password('1111'));
insert into memb(mno, email, nknm, phon, pwd) values(19, 'haha19@naver.com', '입찰자8', '010-2228-2231', password('1111'));
insert into memb(mno, email, nknm, phon, pwd) values(20, 'haha20@naver.com', '입찰자9', '010-2229-2231', password('1111'));

-- 상품 데이터
insert into item(itno, mno, titl, categ, buy, day, deal, time, stpc)
  values(1, 1, '주전자', '생활용품', '2016-12-12', 13, '직거래', now(), 80000);
insert into item(itno, mno, titl, categ, buy, day, deal, time, stpc)
  values(2, 2, '레노버', '컴퓨터', '2016-12-12', 25, '직거래', now(), 400000);
insert into item(itno, mno, titl, categ, buy, day, deal, time, stpc)
  values(3, 3, '레노버', '컴퓨터', '2016-12-15', 100, '택배', now(), 500000);
insert into item(itno, mno, titl, categ, buy, day, deal, time, stpc)
  values(4, 3, '테니스 라켓', '취미', '2016-12-20', 50, '직거래', now(), 150000);
insert into item(itno, mno, titl, categ, buy, day, deal, time, stpc)
  values(5, 4, 'DSLR', '디지털', '2016-12-20', 134, '택배', now(), 250000);
insert into item(itno, mno, titl, categ, buy, day, deal, time, stpc)
  values(6, 6, '태블릿', '디지털', '2016-12-21', 155, '직거래', now(), 150000);
insert into item(itno, mno, titl, categ, buy, day, deal, time, stpc)
  values(7, 7, '쇼파', '가구', '2016-12-21', 356, '택배', now(), 230000);  
insert into item(itno, mno, titl, categ, buy, day, deal, time, stpc)
  values(8, 9, '해리포터', '도서', '2016-12-21', 35, '직거래', now(), 450000);
insert into item(itno, mno, titl, categ, buy, day, deal, time, stpc)
  values(9, 9, '향수', '뷰티', '2016-12-25', 0, '직거래', now(), 150000);
insert into item(itno, mno, titl, categ, buy, day, deal, time, stpc)
  values(10, 10, '주전자', '생활용품', '2016-12-25', 77, '직거래', now(), 80000);

-- 입찰기록 데이터
insert into bdhs(hsno, mno, itno, bids, time) values(1, 11, 1, 90000, now());
insert into bdhs(hsno, mno, itno, bids, time) values(2, 12, 1, 91000, now());
insert into bdhs(hsno, mno, itno, bids, time) values(3, 15, 1, 93000, now());
insert into bdhs(hsno, mno, itno, bids, time) values(4, 19, 1, 95000, now());
insert into bdhs(hsno, mno, itno, bids, time) values(5, 13, 2, 410000, now());
insert into bdhs(hsno, mno, itno, bids, time) values(6, 16, 2, 420000, now());
insert into bdhs(hsno, mno, itno, bids, time) values(7, 20, 2, 450000, now());
insert into bdhs(hsno, mno, itno, bids, time) values(8, 14, 3, 510000, now());

-- 채팅 데이터
insert into chat(chno, bmno, smno, cont, time) values(1, 11, 1, '전화번호 가르켜 주실수 있으세요?', now());
insert into chat(chno, bmno, smno, cont, time) values(2, 13, 2, '전화번호 가르켜 주실수 있으세요?', now());
insert into chat(chno, bmno, smno, cont, time) values(3, 14, 3, '전화번호 가르켜 주실수 있으세요?', now());


