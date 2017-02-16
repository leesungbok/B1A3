-- 회원 데이터
insert into memb(mno,email,pwd,nknm,phon,path,pst_no,bas_adr,det_adr,tel,fcbk,katok,naver) values(1,'user01@test.com',password('1111'),'학생1','010-1111-1111',null,'123-234','서울시 강남구 역삼동','123-1','111-111',null,null,null);
insert into memb(mno,email,pwd,nknm,phon,path,pst_no,bas_adr,det_adr,tel,fcbk,katok,naver) values(2,'user02@test.com',password('1111'),'학생2','010-1112-1112',null,'123-234','서울시 강남구 역삼동','123-1','111-112',null,null,null);
insert into memb(mno,email,pwd,nknm,phon,path,pst_no,bas_adr,det_adr,tel,fcbk,katok,naver) values(3,'user03@test.com',password('1111'),'학생3','010-1113-1113',null,'123-234','서울시 강남구 역삼동','123-1','111-113',null,null,null);
insert into memb(mno,email,pwd,nknm,phon,path,pst_no,bas_adr,det_adr,tel,fcbk,katok,naver) values(4,'user04@test.com',password('1111'),'학생4','010-1114-1114',null,'123-234','서울시 강남구 역삼동','123-1','111-114',null,null,null);
insert into memb(mno,email,pwd,nknm,phon,path,pst_no,bas_adr,det_adr,tel,fcbk,katok,naver) values(5,'user05@test.com',password('1111'),'학생5','010-1115-1115',null,'123-234','서울시 강남구 역삼동','123-1','111-115',null,null,null);
insert into memb(mno,email,pwd,nknm,phon,path,pst_no,bas_adr,det_adr,tel,fcbk,katok,naver) values(6,'user06@test.com',password('1111'),'학생6','010-1116-1116',null,'123-234','서울시 강남구 역삼동','123-1','111-116',null,null,null);


-- 상품 데이터
insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc) values(1,1,'상품1','의류','2017-01-01',30,'직거래','상품1입니다.','16:00~16:30',500000);
insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc) values(2,1,'상품2','전자제품','2017-01-02',80,'택배','상품2입니다.','16:30~17:00',1500000);
insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc) values(3,1,'상품3','책','2017-01-03',130,'직거래','상품3입니다.','17:00~17:30',80000);
insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc) values(4,2,'상품4','의루','2017-01-04',230,'택배 또는 직거래','상품4입니다.','17:30~18:00',8000000);
insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc) values(5,3,'상품5','책','2017-01-05',130,'직거래','상품5입니다.','18:00~18:30',300000);
insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc) values(6,3,'상품6','전자제품','2017-01-06',530,'택배','상품6입니다.','18:30~19:00',2000000);
insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc) values(7,3,'상품7','의류','2017-01-07',730,'직거래','상품7입니다.','19:00~19:30',2500000);
insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc) values(8,4,'상품8','책','2017-01-08',730,'택배 또는 직거래','상품8입니다.','19:30~20:00',5300000);


-- 상품 사진 데이터
insert into phot(pno,itno,path) values(1,1,'t1_1.gif');
insert into phot(pno,itno,path) values(2,1,'t1_2.gif');
insert into phot(pno,itno,path) values(3,1,'t1_3.gif');
insert into phot(pno,itno,path) values(4,2,'t2_4.gif');
insert into phot(pno,itno,path) values(5,3,'t3_5.gif');
insert into phot(pno,itno,path) values(6,3,'t3_6.gif');
insert into phot(pno,itno,path) values(7,3,'t3_7.gif');
insert into phot(pno,itno,path) values(8,4,'t4_8.gif');







