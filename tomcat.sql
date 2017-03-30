-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 상품문의
DROP TABLE IF EXISTS `QNA` RESTRICT;

-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 상품문의
DROP TABLE IF EXISTS `QNA` RESTRICT;

-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 상품문의
DROP TABLE IF EXISTS `QNA` RESTRICT;

-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 상품문의
DROP TABLE IF EXISTS `QNA` RESTRICT;

-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 상품문의
DROP TABLE IF EXISTS `QNA` RESTRICT;

-- 회원
DROP TABLE IF EXISTS `MEMB` RESTRICT;

-- 상품사진
DROP TABLE IF EXISTS `PHOT` RESTRICT;

-- 나의관심
DROP TABLE IF EXISTS `INTER` RESTRICT;

-- 입찰기록
DROP TABLE IF EXISTS `BDHS` RESTRICT;

-- 상품
DROP TABLE IF EXISTS `ITEM` RESTRICT;

-- 채팅
DROP TABLE IF EXISTS `CHAT` RESTRICT;

-- 낙찰품결제
DROP TABLE IF EXISTS `PAYMT` RESTRICT;

-- 상품문의
DROP TABLE IF EXISTS `QNA` RESTRICT;

-- 회원
CREATE TABLE `MEMB` (
  `MNO`     INTEGER      NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  `EMAIL`   VARCHAR(40)  NOT NULL COMMENT '이메일', -- 이메일
  `NKNM`    VARCHAR(6)   NOT NULL COMMENT '닉네임', -- 닉네임
  `PHON`    VARCHAR(30)  NOT NULL COMMENT '휴대폰', -- 휴대폰
  `PWD`     VARCHAR(50)  NOT NULL COMMENT '비밀번호', -- 비밀번호
  `PATH`    VARCHAR(255) NULL     COMMENT '사진경로', -- 사진경로
  `PST_NO`  VARCHAR(10)  NULL     COMMENT '우편번호', -- 우편번호
  `BAS_ADR` VARCHAR(255) NULL     COMMENT '기본주소', -- 기본주소
  `DET_ADR` VARCHAR(255) NULL     COMMENT '상제주소', -- 상제주소
  `TEL`     VARCHAR(30)  NULL     COMMENT '전화번호', -- 전화번호
  `FCBK`    VARCHAR(30)  NULL     COMMENT '페이스북', -- 페이스북
  `KATOK`   VARCHAR(30)  NULL     COMMENT '카카오톡', -- 카카오톡
  `NAVER`   VARCHAR(30)  NULL     COMMENT '네이버' -- 네이버
)
COMMENT '회원';

-- 회원
ALTER TABLE `MEMB`
  ADD CONSTRAINT `PK_MEMB` -- 회원 기본키
    PRIMARY KEY (
      `MNO` -- 회원일련번호
    );

-- 이메일 유니크 인덱스
CREATE UNIQUE INDEX `UIX_MEMB`
  ON `MEMB` ( -- 회원
    `EMAIL` ASC -- 이메일
  );

-- 닉네임 유니크 인덱스
CREATE UNIQUE INDEX `UIX_MEMB2`
  ON `MEMB` ( -- 회원
    `NKNM` ASC -- 닉네임
  );

-- 휴대폰 유니크 인덱스
CREATE UNIQUE INDEX `UIX_MEMB3`
  ON `MEMB` ( -- 회원
    `PHON` ASC -- 휴대폰
  );

-- 페이스북 유니크 인덱스
CREATE UNIQUE INDEX `UIX_MEMB4`
  ON `MEMB` ( -- 회원
    `FCBK` ASC -- 페이스북
  );

-- 카카오톡 유니크 인덱스
CREATE UNIQUE INDEX `UIX_MEMB5`
  ON `MEMB` ( -- 회원
    `KATOK` ASC -- 카카오톡
  );

-- 네이버 유니크 인덱스
CREATE UNIQUE INDEX `UIX_MEMB6`
  ON `MEMB` ( -- 회원
    `NAVER` ASC -- 네이버
  );

ALTER TABLE `MEMB`
  MODIFY COLUMN `MNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '회원일련번호';

-- 상품사진
CREATE TABLE `PHOT` (
  `PNO`  INTEGER      NOT NULL COMMENT '상품사진일련번호', -- 상품사진일련번호
  `ITNO` INTEGER      NOT NULL COMMENT '상품일련번호', -- 상품일련번호
  `PATH` VARCHAR(255) NOT NULL COMMENT '사진경로' -- 사진경로
)
COMMENT '상품사진';

-- 상품사진
ALTER TABLE `PHOT`
  ADD CONSTRAINT `PK_PHOT` -- 상품사진 기본키
    PRIMARY KEY (
      `PNO` -- 상품사진일련번호
    );

ALTER TABLE `PHOT`
  MODIFY COLUMN `PNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '상품사진일련번호';

-- 나의관심
CREATE TABLE `INTER` (
  `MNO`  INTEGER  NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  `ITNO` INTEGER  NOT NULL COMMENT '상품일련번호', -- 상품일련번호
  `TYPE` INTEGER  NULL     COMMENT '유형', -- 유형
  `RDT`  DATETIME NULL     COMMENT '등록일' -- 등록일
)
COMMENT '나의관심';

-- 나의관심
ALTER TABLE `INTER`
  ADD CONSTRAINT `PK_INTER` -- 나의관심 기본키
    PRIMARY KEY (
      `MNO`,  -- 회원일련번호
      `ITNO`  -- 상품일련번호
    );

-- 입찰기록
CREATE TABLE `BDHS` (
  `HSNO` INTEGER  NOT NULL COMMENT '입찰기록일련번호', -- 입찰기록일련번호
  `MNO`  INTEGER  NOT NULL COMMENT '입찰자', -- 입찰자
  `ITNO` INTEGER  NOT NULL COMMENT '상품일련번호', -- 상품일련번호
  `BIDS` INTEGER  NOT NULL COMMENT '입찰가', -- 입찰가
  `TIME` DATETIME NOT NULL COMMENT '입찰시간', -- 입찰시간
  `STAT` INTEGER  NOT NULL DEFAULT 0 COMMENT '결제상태' -- 결제상태
)
COMMENT '입찰기록';

-- 입찰기록
ALTER TABLE `BDHS`
  ADD CONSTRAINT `PK_BDHS` -- 입찰기록 기본키
    PRIMARY KEY (
      `HSNO` -- 입찰기록일련번호
    );

ALTER TABLE `BDHS`
  MODIFY COLUMN `HSNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '입찰기록일련번호';

-- 상품
CREATE TABLE `ITEM` (
  `ITNO`  INTEGER     NOT NULL COMMENT '상품일련번호', -- 상품일련번호
  `MNO`   INTEGER     NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  `TITL`  VARCHAR(30) NOT NULL COMMENT '제목', -- 제목
  `CATEG` VARCHAR(10) NOT NULL COMMENT '카테고리', -- 카테고리
  `BUY`   DATETIME    NOT NULL COMMENT '구입시기', -- 구입시기
  `DAY`   VARCHAR(30) NOT NULL COMMENT '사용일수', -- 사용일수
  `DEAL`  VARCHAR(10) NOT NULL COMMENT '거래방식', -- 거래방식
  `CONT`  TEXT        NULL     COMMENT '상세설명', -- 상세설명
  `TIME`  DATETIME    NOT NULL COMMENT '시작시간', -- 시작시간
  `STPC`  INTEGER     NOT NULL COMMENT '시작가' -- 시작가
)
COMMENT '상품';

-- 상품
ALTER TABLE `ITEM`
  ADD CONSTRAINT `PK_ITEM` -- 상품 기본키
    PRIMARY KEY (
      `ITNO` -- 상품일련번호
    );

ALTER TABLE `ITEM`
  MODIFY COLUMN `ITNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '상품일련번호';

-- 채팅
CREATE TABLE `CHAT` (
  `CHNO` INTEGER  NOT NULL COMMENT '채팅일련번호', -- 채팅일련번호
  `BMNO` INTEGER  NOT NULL COMMENT '보내는회원일련번호', -- 보내는회원일련번호
  `SMNO` INTEGER  NOT NULL COMMENT '판매자회원일련번호', -- 판매자회원일련번호
  `CONT` TEXT     NOT NULL COMMENT '내용', -- 내용
  `TIME` DATETIME NOT NULL COMMENT '보낸시간' -- 보낸시간
)
COMMENT '채팅';

-- 채팅
ALTER TABLE `CHAT`
  ADD CONSTRAINT `PK_CHAT` -- 채팅 기본키
    PRIMARY KEY (
      `CHNO` -- 채팅일련번호
    );

ALTER TABLE `CHAT`
  MODIFY COLUMN `CHNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '채팅일련번호';

-- 낙찰품결제
CREATE TABLE `PAYMT` (
  `HSNO`  INTEGER      NOT NULL COMMENT '입찰기록일련번호', -- 입찰기록일련번호
  `PAY`   INTEGER      NOT NULL COMMENT '결제방법', -- 결제방법
  `RECV`  VARCHAR(10)  NOT NULL COMMENT '받으시는분', -- 받으시는분
  `DELIV` VARCHAR(255) NOT NULL COMMENT '배송지', -- 배송지
  `CONT`  TEXT         NULL     COMMENT '배송시요구사항' -- 배송시요구사항
)
COMMENT '낙찰품결제';

-- 낙찰품결제
ALTER TABLE `PAYMT`
  ADD CONSTRAINT `PK_PAYMT` -- 낙찰품결제 기본키
    PRIMARY KEY (
      `HSNO` -- 입찰기록일련번호
    );

-- 상품문의
CREATE TABLE `QNA` (
  `QNO`  INTEGER     NOT NULL COMMENT '상품문의일련번호', -- 상품문의일련번호
  `MNO`  INTEGER     NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  `ITNO` INTEGER     NOT NULL COMMENT '상품일련번호', -- 상품일련번호
  `QUS`  VARCHAR(30) NOT NULL COMMENT '문의', -- 문의
  `QTM`  DATETIME    NOT NULL COMMENT '문의시간', -- 문의시간
  `ANS`  TEXT        NULL     COMMENT '답변', -- 답변
  `ATM`  DATETIME    NULL     COMMENT '답변시간' -- 답변시간
)
COMMENT '상품문의';

-- 상품문의
ALTER TABLE `QNA`
  ADD CONSTRAINT `PK_QNA` -- 상품문의 기본키
    PRIMARY KEY (
      `QNO` -- 상품문의일련번호
    );

ALTER TABLE `QNA`
  MODIFY COLUMN `QNO` INTEGER NOT NULL AUTO_INCREMENT COMMENT '상품문의일련번호';

-- 상품사진
ALTER TABLE `PHOT`
  ADD CONSTRAINT `FK_ITEM_TO_PHOT` -- 상품 -> 상품사진
    FOREIGN KEY (
      `ITNO` -- 상품일련번호
    )
    REFERENCES `ITEM` ( -- 상품
      `ITNO` -- 상품일련번호
    );

-- 나의관심
ALTER TABLE `INTER`
  ADD CONSTRAINT `FK_MEMB_TO_INTER` -- 회원 -> 나의관심
    FOREIGN KEY (
      `MNO` -- 회원일련번호
    )
    REFERENCES `MEMB` ( -- 회원
      `MNO` -- 회원일련번호
    );

-- 나의관심
ALTER TABLE `INTER`
  ADD CONSTRAINT `FK_ITEM_TO_INTER` -- 상품 -> 나의관심
    FOREIGN KEY (
      `ITNO` -- 상품일련번호
    )
    REFERENCES `ITEM` ( -- 상품
      `ITNO` -- 상품일련번호
    );

-- 입찰기록
ALTER TABLE `BDHS`
  ADD CONSTRAINT `FK_MEMB_TO_BDHS` -- 회원 -> 입찰기록
    FOREIGN KEY (
      `MNO` -- 입찰자
    )
    REFERENCES `MEMB` ( -- 회원
      `MNO` -- 회원일련번호
    );

-- 입찰기록
ALTER TABLE `BDHS`
  ADD CONSTRAINT `FK_ITEM_TO_BDHS` -- 상품 -> 입찰기록
    FOREIGN KEY (
      `ITNO` -- 상품일련번호
    )
    REFERENCES `ITEM` ( -- 상품
      `ITNO` -- 상품일련번호
    );

-- 상품
ALTER TABLE `ITEM`
  ADD CONSTRAINT `FK_MEMB_TO_ITEM` -- 회원 -> 상품
    FOREIGN KEY (
      `MNO` -- 회원일련번호
    )
    REFERENCES `MEMB` ( -- 회원
      `MNO` -- 회원일련번호
    );

-- 채팅
ALTER TABLE `CHAT`
  ADD CONSTRAINT `FK_MEMB_TO_CHAT` -- 회원 -> 채팅
    FOREIGN KEY (
      `SMNO` -- 판매자회원일련번호
    )
    REFERENCES `MEMB` ( -- 회원
      `MNO` -- 회원일련번호
    );

-- 채팅
ALTER TABLE `CHAT`
  ADD CONSTRAINT `FK_MEMB_TO_CHAT2` -- 회원 -> 채팅2
    FOREIGN KEY (
      `BMNO` -- 보내는회원일련번호
    )
    REFERENCES `MEMB` ( -- 회원
      `MNO` -- 회원일련번호
    );

-- 낙찰품결제
ALTER TABLE `PAYMT`
  ADD CONSTRAINT `FK_BDHS_TO_PAYMT` -- 입찰기록 -> 낙찰품결제
    FOREIGN KEY (
      `HSNO` -- 입찰기록일련번호
    )
    REFERENCES `BDHS` ( -- 입찰기록
      `HSNO` -- 입찰기록일련번호
    );

-- 상품문의
ALTER TABLE `QNA`
  ADD CONSTRAINT `FK_MEMB_TO_QNA` -- 회원 -> 상품문의
    FOREIGN KEY (
      `MNO` -- 회원일련번호
    )
    REFERENCES `MEMB` ( -- 회원
      `MNO` -- 회원일련번호
    );

-- 상품문의
ALTER TABLE `QNA`
  ADD CONSTRAINT `FK_ITEM_TO_QNA` -- 상품 -> 상품문의
    FOREIGN KEY (
      `ITNO` -- 상품일련번호
    )
    REFERENCES `ITEM` ( -- 상품
      `ITNO` -- 상품일련번호
    );
    
-- 회원 데이터
insert into memb(mno,email,pwd,nknm,phon,path,pst_no,bas_adr,det_adr,tel,fcbk,katok,naver) 
values(1,'sungbok@naver.com',password('1111'),'이성복','010-5960-0335','sung.png','06621','서울 서초구 강남대로53길 8 (서초동, 비트아카데미빌딩)','3층','111-111',null,null,null);
insert into memb(mno,email,pwd,nknm,phon,path,pst_no,bas_adr,det_adr,tel,fcbk,katok,naver) 
values(2,'bora@gmail.com',password('1111'),'김보라','010-4111-9109','bo.png','123-234','서울시 강남구 역삼동','123-1','111-112',null,null,null);
insert into memb(mno,email,pwd,nknm,phon,path,pst_no,bas_adr,det_adr,tel,fcbk,katok,naver) 
values(3,'yongseok@gmail.com',password('1111'),'오용석','010-3177-3840','dong.png','123-234','서울시 강남구 역삼동','123-1','111-113',null,null,null);
insert into memb(mno,email,pwd,nknm,phon,path,pst_no,bas_adr,det_adr,tel,fcbk,katok,naver) 
values(4,'kimgun@naver.com',password('1111'),'김건우','010-4534-1457','user.png','123-234','서울시 강남구 역삼동','123-1','111-114',null,null,null);
insert into memb(mno,email,pwd,nknm,phon,path,pst_no,bas_adr,det_adr,tel,fcbk,katok,naver) 
values(5,'sungkyo@naver.com',password('1111'),'정선교','010-2265-7899','user.png','123-234','서울시 강남구 역삼동','123-1','111-115',null,null,null);
insert into memb(mno,email,pwd,nknm,phon,path,pst_no,bas_adr,det_adr,tel,fcbk,katok,naver) 
values(6,'jaenyong@gmail.com',password('1111'),'김재녕','010-8466-3558','user.png','123-234','서울시 강남구 역삼동','123-1','111-116',null,null,null);
insert into memb(mno,email,pwd,nknm,phon,path,pst_no,bas_adr,det_adr,tel,fcbk,katok,naver) 
values(7,'jinyoung@naver.com',password('1111'),'엄진영','010-1116-1116','user.png','123-234','서울시 강남구 역삼동','123-1','111-116',null,null,null);

-- 과거경매
insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(1,1,'나이키골프 긴팔 남성 옷산','패션','2016-02-21','1년','택배',
'브랜드명 : 나이키 골프 M<br>
품질 : 상<br>
(개인적 견해니 꼭 상세사진 확인 부탁드립니다.)<br>
원산지 : 방글라데시<br>
총길이: 70cm<br>
가슴단면: 54cm<br>
어깨부터팔길이단면: 75cm<br>
특이사항 : 없음<br><br>
신중한 입찰 부탁드립니다.<br>
사이즈 기재시 측정방법에 따라 2~3cm정도 오차가 있을수 있습니다.<br>
(아우터의 경우 가슴단면은 바깥부분을 측정하기 때문에 옷의 두께 감의 따른 차이가 있을수이 있습니다.)<br>'
,'2017-01-01 12:00',8000);
insert into phot(itno,path) values(1,'1490606312889_0');
insert into phot(itno,path) values(1,'1490606312903_1');
insert into phot(itno,path) values(1,'1490606312903_2');
insert into phot(itno,path) values(1,'1490606312904_3');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 2,2,
'트루젼 코듀로이 마이자켓','패션','2016-03-05','3개월','택배',
'M1035--트루젠 코듀로이 마이자켓<br>
사이즈100  실측사이즈  어깨 45/ 가슴 52/ 팔 61/ 총장 78<br>
깔끔한 베이직카라스타일의 코듀로이 마이자켓으로 캐주얼 세미정장<br>
코디가 가능하여 활용도 높은 자켓입니다. 겨울엔 코트안에 봄가을엔<br>
평상시 외투로 활용도 높으며 하자없이 깔끔한 상태입니다~'
,30000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(2,'1490606712692_4');
insert into phot(itno,path) values(2,'1490606712692_5');
insert into phot(itno,path) values(2,'1490606712693_6');
insert into phot(itno,path) values(2,'1490606712693_7');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 3,3,'Columbia 폴리스점퍼','패션','2016-04-20','6개월','택배',
'옷 상태 좋아요!<br>
실측사이즈 확인해 주세요~!<br>
겉감 폴리에스터 100%..안감 나일론 100% 입니다.<br>
택사이즈        S (95)<br>
- 실측사이즈 (cm) -<br>
어깨            47<br>
가슴            51<br>
팔                56<br>
총길이         54<br><br>
 *본인이 입으시는 사이즈와 실측 사이즈를 비교 하시는 것이 가장 정확 합니다.<br>
*측정방법에 따라서, 실측에 오차가 있을 수 있습니다.<br>
*구제옷의 특성상 미세한 사용감/세탁가능한 얼룩정도는 너그러이 감안해 주시고,<br>
예민하신분은 신중히 구매 하시기 바랍니다.<br>
*사진은 조명없이 자연광에서 찍었습니다.<br>
*색상은 빚과 모니터해상도에 따라서 다를수 있습니다.<br>
구제 옷의 특성상 사용감이 있을 수 있습니다.  배송 전 스팀다림질 및 꼼꼼히 포장하여 보내드립니다.'
,3000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(3,'1490607303276_8');
insert into phot(itno,path) values(3,'1490607303277_9');
insert into phot(itno,path) values(3,'1490607303277_10');
insert into phot(itno,path) values(3,'1490607303277_11');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 4,4,'레몽/옐로 봄 가디건','패션','2016-04-20','6개월','택배',
'사이즈 5566<br>
구입가:5만8천<br>
새제품<br>
안쓰는 제품 정리합니다.'
,3000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(4,'1490607474644_12');
insert into phot(itno,path) values(4,'1490607474645_13');
insert into phot(itno,path) values(4,'1490607474646_14');
insert into phot(itno,path) values(4,'1490607474646_15');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 5,5,'GAP 린넨 마 자켓 슬림','패션','2016-08-20','2개월','택배',
'GAP 린넨 마 자켓 슬림 남자95싸이즈 입니다.<br>
시원한 소재 투버튼 한갈래 뒷트임 디자인의 자켓 입니다.<br>
깨끗합니다.<br>
기장70cm 가슴52cm 어깨45cm 소매61cm<br>
사이즈 확인후 구매바람'
,15000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(5,'1490607773058_16');
insert into phot(itno,path) values(5,'1490607773059_17');
insert into phot(itno,path) values(5,'1490607773059_18');
insert into phot(itno,path) values(5,'1490607773059_19');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 6,6,'DKNY 사피아 숄더크로스백','가방','2016-08-20','2개월','택배',
'✔제품명 : DKNY 도나카란뉴욕 신형 사피아노백<br>
✔소재 : 사피아노 소가죽<br>
✔사이즈(cm) : 아랫가로35 윗가로32 세로24 폭11<br> 
(실측 재는위치에 따라 1-2센치 차이날수있으니 대략적인 크기만 참고해주세요)<br>
✔상태 : 자연스러운 착용감<br>
★중고가방이다보니 일일이 설명드리지 못한 하자있을 수 있습니다. 최대한 기입후 판매중입니다.'
,50000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(6,'1490608123825_20');
insert into phot(itno,path) values(6,'1490608123826_21');
insert into phot(itno,path) values(6,'1490608123826_22');
insert into phot(itno,path) values(6,'1490608123827_23');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 7,6,'닥스 DAKS 체크 가방정품','가방','2016-08-20','2개월','택배',
'가로32cm<br>
세로27cm<br>
폭14cm<br>
손잡이 높이20cm<br>
가로끈을 연결할수있어 두가지 스타일로 사용할수있어요.'
,50000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(7,'1490608943033_24');
insert into phot(itno,path) values(7,'1490608943033_25');
insert into phot(itno,path) values(7,'1490608943049_26');
insert into phot(itno,path) values(7,'1490608943049_27');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 8,3,'락리버 서류/노트북가방','가방','2016-08-20','2개월','택배',
'새상품입니다<br>
서류가방 노트북가바으로편하게사용가능<br>
좋은가격으로가지고가세요<br>
010-8855-0884로해주세요(문자)<br>
상품문의는메일이나상품에문의하지마세요...<br>
제가확인을못한담니다<br>
전화문의바람니다<br>
***제품의특성상(무게,부피,파손)묶음이불가할수있담니다***'
,9000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(8,'1490609646097_28');
insert into phot(itno,path) values(8,'1490609646098_29');
insert into phot(itno,path) values(8,'1490609646098_30');
insert into phot(itno,path) values(8,'1490609646100_31');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 9,2,'여행가방 33인치대형','가방','2016-08-20','2개월','택배',
'새상품입니다<br>
서류가방 노트북가바으로편하게사용가능<br>
좋은가격으로가지고가세요<br>
010-8855-0884로해주세요(문자)<br>
상품문의는메일이나상품에문의하지마세요...<br>
제가확인을못한담니다<br>
전화문의바람니다<br>
***제품의특성상(무게,부피,파손)묶음이불가할수있담니다***'
,30000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(9,'1490609854247_32');
insert into phot(itno,path) values(9,'1490609854247_33');
insert into phot(itno,path) values(9,'1490609854248_34');
insert into phot(itno,path) values(9,'1490609854248_35');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 10,4,'상어구제 mcm 크로스백','가방','2016-08-20','2개월','택배',
'-실측-<br>
사이즈  가로35cm 세로30cm<br>
-엠씨엠 가방입니다<br>
-사용감 있을 수 있으며 사진상과 같은 상태입니다
010 9443 7243
- 반품,환불시 꼭 문자주세요 -'
,10000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(10,'1490610097124_36');
insert into phot(itno,path) values(10,'1490610097124_37');
insert into phot(itno,path) values(10,'1490610097125_38');
insert into phot(itno,path) values(10,'1490610097125_39');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 11,5,'IKEA 수납장','가구','2016-08-20','2개월','택배',
'SECOND HAND 즉 중고 제품입니다.<br>
당연히 사용감 은 존재한다고 보셔야 맘이 편하십니다.<br>
기타 문의 하실분들은 010-8674-8935 로 문자나 연락 주시면<br>
친절히 알려 드리겠습니다.<br>
부피와 무게가 다양하여 택배비는 정확히 책정할수 없습니다.<br>
★반송:물건을 받아보시고 맘에 안드신다고 무작정 반송보내시면 절대 받지 않습니다.<br>
먼저 연락을 주시고 반송 사유에 대해서 설명해주셔야 그다음 절차로 진행해드리오니<br>
입찰하실 때 꼼꼼하게 살펴보시고 진행 부탁드립니다.<br><br>
 IKEA 이케아 정품 철제 수납장입니다.<br>
가로 세로 높이 각각 28*41*68 (cm) 크기네요<br>
총 7칸의 수납공간의 서랍을 가지고 있구요<br>
녹슨 부분 파손 부분 없이 정말 깨끗한 제품입니다.<br>
색상 또한 너무 이쁜 빨강 이네요<br>
집안 인테리어 수납용도나 상점 사무실용어디든 이쁜 제품입니다.<br>
바닥에 바퀴 달려있어서 이동하기도 수월하네요^^'
,10000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(11,'1490610708595_40');
insert into phot(itno,path) values(11,'1490610708595_41');
insert into phot(itno,path) values(11,'1490610708596_42');
insert into phot(itno,path) values(11,'1490610708596_43');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 12,5,'프랑스썬베드 3단접이식의자','가구','2016-06-20','4개월','택배',
'그로스필렉스비치의자<br>
접이식릴렉스체어 야외<br>
프랑스정품 야외비치침대입니다<br>
3단으로 접이식 넘 조아요<br>
수영장 야외썬텐으로 사용하세요<br>
사용감있지만 아주 조아요~<br>
차량에 넣어서 가지고 다닐수있게 3단접이식입니다<br>
보관하기도 편해요~총길이..187cm 높이..27 cm 폭..57cm<br>
머리쪽도 3단으로 높이 조절가능한 고가의비취의자입니다~'
,10000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(12,'1490611022162_44');
insert into phot(itno,path) values(12,'1490611022163_45');
insert into phot(itno,path) values(12,'1490611022163_46');
insert into phot(itno,path) values(12,'1490611022165_47');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 13,1,'21T 핀란드소나무 수납장','가구','2016-01-20','1년','택배',
'- 제품 사이즈 -<br>
가로 : 80Cm<br>
높이 : 120Cm<br>
판매자 위치는 부천 상동역 입니다.<br>
직접 가지러 오시거나 택배 발송 가능합니다.<br>
부피가 크기떄문에 되도록이면 직접 가져가시거나 다른 집기류 의자 책상 테이블 책장 등 여러가지가 있가있습니다.'
,10000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(13,'1490670133059_0');
insert into phot(itno,path) values(13,'1490670133060_1');
insert into phot(itno,path) values(13,'1490670133060_2');
insert into phot(itno,path) values(13,'1490670133060_3');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 14,2,'까사미아 아동가구','가구','2017-01-20','1개월','택배',
'까사미아 아동가구세트입니다.<br>
도장이 잘된제품이라 닦으시면 깨끗하게 사용하실수있을거예요.<br>
침대아래쪽은 돈더들여 서랍장두개를 추가 구매하였습니다.<br>
수납하기좋습니다. 필요없으시면 빼고도 사용가능합니다.<br>
장농의 화이트선반은 원래 슬라이딩철재선반이었는데 수납이 안좋아서<br>
선반 맟추어서 사용하였습니다.<br>
침대  210  x  107'
,20000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(14,'1490670350873_4');
insert into phot(itno,path) values(14,'1490670350874_5');
insert into phot(itno,path) values(14,'1490670350874_6');
insert into phot(itno,path) values(14,'1490670350875_7');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 15,5,'이노센트 천연가죽 4인용쇼파','가구','2015-10-01','2년','택배',
'이노센트-4인용 터치식 리클라이너-설명서등-새거수준<br>
제원: 총 길이 3.2미터    ,   세로두께 98센티<br>
구성:터치식 리클라이너 두쌍,    수동 리클라이너 2쌍,     팔걸이 수납 1개<br>
2015년 가을에 구매한, 이노센트 제품입니다.  구입당시 기억은 잘안나지만 400만원 이상주었던거같습니다.<br>
사용감이 거의 없어서 상태는 새거수준입니다.   상태는 제 판매들  보셔서  알겠지만,  아주 양호합니다.<br>
천연 가죽이고, 국산브래드라 as문제없습니다.<br>
리클라이너의 고민점은  as문제인데  국산업체라 믿을만 합니다.<br>
운임은  별도이고,  금액이 120만원 이상일시   협의하여  일정부분  지원토록  하겠습니다.<br>
참고로,  경기도 안산 한양대 인근입니다.   <br>
수도권일경우   약 15만원 정도면 운임이 될것으로 보입니다.'
,20000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(15,'1490670530168_8');
insert into phot(itno,path) values(15,'1490670530168_9');
insert into phot(itno,path) values(15,'1490670530169_10');
insert into phot(itno,path) values(15,'1490670530169_11');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 16,6,'원피스 루피 피규어','취미','2016-10-01','5개월','택배',
'원피스 루피 피규어입니다.<br>
중국산 박스채 새제품이고 앉은자세임에도 높이가 13센티정도 되네요.<br>
에이스하고 한세트인 제품이구요.<br>
에이스가 죽을때 에이스를 안고 있는 자세를 만든 제품입니다.<br>
정상결전 이후라서 몸 여기저기 상처가 눈에 띄네요. 퀄리티 좋아요.<br>
원피스 주인공 루피 피규어를 천원경매로 낙찰가에 무조건 판매합니다.'
,1000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(16,'1490670762034_12');
insert into phot(itno,path) values(16,'1490670762035_13');
insert into phot(itno,path) values(16,'1490670762036_14');
insert into phot(itno,path) values(16,'1490670762036_15');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 17,4,'DY 88건반 디지털피아노','취미','2016-10-01','5개월','택배',
'디지털피아노 팝니다.<br>
88건반으로 피아노 연습용으로<br>
아주 좋습니다.<br>
성능과 기능 모두<br>
정상작동 됩니다.<br>
사진은 실물 입니다.<br>
낙찰 되는데로 조건없이 판매 합니다.'
,10000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(17,'1490671036901_16');
insert into phot(itno,path) values(17,'1490671036901_17');
insert into phot(itno,path) values(17,'1490671036902_18');
insert into phot(itno,path) values(17,'1490671036902_19');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 18,4,'미국 링컨 휫페니 세트','취미','2016-10-01','5개월','택배',
'미국 링컨 휫페니 세트<br>
제가 예전부터 미국 1센트 주화를 1959년에서 2015년까지 57종을<br>
경매에 자주 올렸습니다만.<br>
오늘은 그 이전 주화들을 올릴까 합니다.<br>
주화의 년도 : 1939~58년으로 총20개입니다<br>
나름 귀한 주화들로 판매상에서도 매매하는 곳이 없고,<br>
있다고 하더라도 가격 또한 만만치 않습니다.<br>
오히려 1909년 이전의 인디언센트 주화는 취급하는 곳들이 있습니다만, 아쉽게도 1910년부터 1957년까지는 찾아볼 수 없었습니다.<br>
그간 링컨주화를 테마로 수집하셨던 분들께는 더없이 좋은 기회라 생각됩니다.<br>
즐거운 경매되시고,<br>
제가 출근하면서 물건을 가져갈 수 없기에 결재일 바로 배송을 드리지 못함을 이해하여 주시기 바랍니다.'
,13000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(18,'1490671309529_20');
insert into phot(itno,path) values(18,'1490671309529_21');
insert into phot(itno,path) values(18,'1490671309530_22');
insert into phot(itno,path) values(18,'1490671309530_23');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 19,6,'크레프터 통기타','취미','2016-10-01','5개월','택배',
'크레프터 통기타<br>
사진에 보이듲이 하부좀 깨졋습니다  사용하는대 지장은 없으나<br>
감안해서 저렴하게 올려봅니다'
,35000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(19,'1490673535468_24');
insert into phot(itno,path) values(19,'1490673535469_25');
insert into phot(itno,path) values(19,'1490673535471_26');
insert into phot(itno,path) values(19,'1490673535471_27');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 20,6,'CX-10W 쿼드콥터 드론','취미','2017-02-01','1개월','택배',
'■ 높은 가성비<br>
■ 카메라 내장, 와이파이로 스마트폰 조종, 실시간 ftp<br>
■ 미니 드론으로 비행 중 상해걱정 NoNo<br>
■ 자유로운 실내비행(입문자 사용시 Good)<br>
■ 언제 어디서나 자유로운 조작<br>
■ 크기 : 62*62*20<br>
■ 스피드 민감도 조절, HD카메라(30만화소)<br>
■ 미니 코드퀍터 드론<br>
■ 6출 자이로스코프<br>
■ 3D플립/FPV<br>
■ QR코드를 통안 안드로이드, IOS 어플 지원<br>
■ 최대 30M 까지 컨트롤 가능<br>
■ 1시간 충전/ 4분 사용<br>
※불량 확인을 위해 살짝 뜯어본 새제품입니다.'
,35000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(20,'1490673749227_28');
insert into phot(itno,path) values(20,'1490673749228_29');
insert into phot(itno,path) values(20,'1490673749228_30');
insert into phot(itno,path) values(20,'1490673749229_31');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 21,6,'SK 노트5 골드 공기계','디지털','2016-02-24','1년','택배',
'SK 상태좋은 갤럭시노트5 골드판매합니다.<br>
외관및 액정상태 좋은폰입니다.<br>
정상해지후 판매하는 제품이니 대리점에서 확정기변후 안심하시고 사용하시면되는폰입니다.<br>
구성품은 사진과 같이 본체구성입니다.  삼성제품 특성상 액정에 잔상은 일부있습니다.<br>
좋은제품이니 많은 입찰바랍니다^^'
,1000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(21,'1490674375817_40');
insert into phot(itno,path) values(21,'1490674375817_41');
insert into phot(itno,path) values(21,'1490674375818_42');
insert into phot(itno,path) values(21,'1490674375818_43');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 22,1,'아이폰7+ 128GB','디지털','2016-08-24','3개월','택배',
'아이폰 7+ 128GB 로즈골드입니다.<br>
위 사진에서 보시는 바와 같이 처음 구매시 그대로 박스셋으로 드립니다.<br>
실사용기 3개월 정도이며 케이스 사용하여 스크래치, 기스 없는 특A급 상태입니다.<br>
제품하자 외에 단순 변심에 의한 반품은 불가 하오니<br>
신중한 입찰을 부탁드리겠습니다.<br>
KT에서 기기 변경 가능합니다.'
,6000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(22,'1490674776370_44');
insert into phot(itno,path) values(22,'1490674776371_45');
insert into phot(itno,path) values(22,'1490674776371_46');
insert into phot(itno,path) values(22,'1490674776372_47');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 23,3,'레트로게임용 10인치TV','디지털','2014-08-24','2년','택배',
'판매물품 : 10인치 미니TV (레트로게임용으로 추천)<br>
레트로 게임용으로 아담한 10인치 미니TV입니다.<br>
220전원선 동봉해서 보내드리며 외관에 너무 민감하신분은 패스해주세요~.<br>
실사진 그대로 자세히 찍어서 올립니다.<br>
외부입력 AV , 사운드는 모노입력 입니다.<br>
색상조절 가능하며 화면 꺠끗하게 나옵니다.<br>
브라운관에 기스등 전혀없습니다.<br>
파손없이 잘 포장해서 보내드리며 착불 4000원정도 나올듯 합니다.~~'
,6000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(23,'1490674951213_48');
insert into phot(itno,path) values(23,'1490674951214_49');
insert into phot(itno,path) values(23,'1490674951216_50');
insert into phot(itno,path) values(23,'1490674951217_51');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 24,5,'XBOX360 팔콘 1인셋','디지털','2014-08-24','2년','택배',
'XBOX360 팔콘 1인셋, 천원경매합니다.<br>
무조건 낙찰가에 판매하며 택배비는 착불 4000원정도 나올듯합니다.<br>
구성품은 xbox360 팔콘 본체 (하드20기가), 무선패드1개, hdmi케이블, 팔콘 220전원 어댑터, 본체에 테스트용 정품 게임1장<br>
대쉬보드는 예전 버전인 7371 이니 참고하시구요.<br>
단점은 DVDROM이 잘 안 나옵니다.<br>
DVD트레이를 손으로 좀 살살 떄리시면(?) DVDROM 잘 나옵니다.^^<br>
그냥 저렴하게 플레이용으로 봐주시면 될듯 합니다.<br>
너무 상태에 민감하신분은 입찰 피해주시구요.~~<br>
배송관련 : 토요일,일요일은 배송이 안됩니다.<br>
대부분의 경우  결제 당일에 보내드리도록 노력드리지만<br>
개인이다 보니 집에 늦게 들어오는 경우 결제후 익일에 보내드리는 경우도 있습니다.'
,5000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(24,'1490675072606_52');
insert into phot(itno,path) values(24,'1490675072606_53');
insert into phot(itno,path) values(24,'1490675072607_54');
insert into phot(itno,path) values(24,'1490675072607_55');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 25,2,'아이패드 에어2 6세대64G','디지털','2014-08-24','2년','택배',
'아이패드 에어 2 와이파이 + 셀룰러 64 판매합니다. 제품박스 및 충전기 구성품 드립니다.<br>
베터리 양호하고 kt로 데이터 호환하며  잘쓰고 있는 아이패드를 판매 합니다.<br>
전자 제품 특성상 반품은 불가 합니다.'
,10000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(25,'1490675189114_56');
insert into phot(itno,path) values(25,'1490675189115_57');
insert into phot(itno,path) values(25,'1490675189116_58');
insert into phot(itno,path) values(25,'1490675189116_59');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 26,3,'서피스프로3 I5/4GB','컴퓨터','2016-02-01','1년','택배',
'구성품<br>
서피스프로3 ( I5 / 4GB / 128GB ) 사양 및 성능은 말씀 안드려도 될듯하네여<br>
a/s기간은 종료 되었지만 서비스 받을 일이 거의 없네요<br>
터치등 기능 이상무 좋은분 만났으면 합니다.<br>
타이핑커버는 색상이 그래서 인지 때가 조금 있네용<br>
1.본 체 (I5 / 4GB / 128GB )<br>
2.타이핑커버(청색)<br>
3.정품 충전기 +  1 = 2set<br>
4.박스<br>
5.파우치(LG가죽제품)<br>
6. 3in1 젠더<br>
7. LG정품 가죽 파우치'
,10000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(26,'1490673920391_32');
insert into phot(itno,path) values(26,'1490673920391_33');
insert into phot(itno,path) values(26,'1490673920392_34');
insert into phot(itno,path) values(26,'1490673920392_35');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 27,5,'HP ENVY 코어i5램8G','컴퓨터','2016-02-01','1년','택배',
'소리조용하고 속도 잘나옵니다<br>
액정A급 외관 사진 보시면 양쪽 모서리쪽<br>
깨짐있습니다 기능상에 문제는 없습니다<br>
구성품은 노트북과 아답터<br>
배터리는 3-4시간 사용가능합니다<br>
------------------------------------------------<br>
윈도우7 64비트로설치했습니다<br>
복원도 만들어 놓았습니다 전원 켜시고 F11키 누르시면<br>
자동복원 됩니다<br>
필수 유틸인 한글 엑셀 네로 기타<br>
등등 프로그램은 D드라이브에 넣어 놧으니 필요한건 설치해서 사용하세요<br>
---------------------------------------------------------------------------------<br>
사양은<br>
CPU : 인텔 코어 i5-3317u<br>
RAM : DDR3 8기가<br>
HDD : 500기가 파티션 2개<br>
VGA : ATI HD7600<br>
액정 : 14인치 무광 LED액정<br>
ODD : X<br>
무선랜 유선랜 카드리더기 USB슬롯3개 외장RGB 웹캠 HDMI'
,50000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(27,'1490674098630_36');
insert into phot(itno,path) values(27,'1490674098630_37');
insert into phot(itno,path) values(27,'1490674098631_38');
insert into phot(itno,path) values(27,'1490674098631_39');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 28,5,'레노버 씽크패드 T430i5','컴퓨터','2016-02-01','1년','택배',
'T430 노트북 팝니다.<br>
CPU : i5 - 3320(아이비브릿지)<br>
RAM : 8 G DDR3<br>
SSD : 커세어 120GB /<br>
HDD : 320G<br>
14인치 (1600 X 900)<br>
WIFI : 2.4/5GHz 지원<br>
빨콩키보드<br>
USB 3.0 포트 2개<br>
위와 같은 사양으로 판매합니다. 특징은 아주 상태가 좋고 SSD와 HDD가 동시에 부착되어 있고 메모리가 기본 4기가 에서<br>
8기가로 업그레이드 되어 있어서 원활한 작업이 가능하다는 것입니다.<br>
윈도우 10 세팅되어 있습니다. DVD롬 탈부착할 수 있는 것도 함께 보내드립니다.<br>
블루투스도 사용하시라고 USB 블루투스 4.0 리시버도 함께 보내드립니다.<br>
그리고 겉면이 아시다시피 쓸키면 표가 잘나는 제질이라 은색스킨을 붙여놓은 상태입니다.<br>
받아보시면 그렇게 이질감 없이 편하게 사용하실 수 있을 것입니다.<br>
잘 포장해서 보내드리도록 하겠습니다. 택배비는 제가 부담합니다.<br>
좋은 분께 잘 전달되었으면 합니다.'
,20000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(28,'1490675551119_64');
insert into phot(itno,path) values(28,'1490675551120_65');
insert into phot(itno,path) values(28,'1490675551120_66');
insert into phot(itno,path) values(28,'1490675551121_67');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 29,4,'LG 엑스노트 C400 i5','컴퓨터','2016-02-01','1년','택배',
'LG 엑스노트C400<br>
CPU : I5 M480 2.67GHz<br>
RAM : DDR3 3G렘<br>
HDD : SATA320GB<br>
ODD : DVDRW<br>
VGA : 인텔HD<br>
LED : 14.1 와이드 액정<br>
유무선인터넷 웹캠 HDMI<br>
본제품 엑스노트C400노트북입니다.<br>
제품상태 전체적으로 깨끗합니다.<br>
사무작업이나 영화감상 인터넷쇼핑등 기본적인사용과 중상급 게임들도 원활합니다.<br>
사용하실 프로그램 권장사양과 비교후 신중한 입찰 부탁드리며 배터리 방전으로 아답터 연결하셔서 사용하셔야합니다.<br>
낙찰가에 보내드리며 착불3000원 입니다. 좋은거래 부탁드립니다. 감사합니다.<br>
총구성품 노트북+아답터'
,20000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(29,'1490675655782_68');
insert into phot(itno,path) values(29,'1490675655782_69');
insert into phot(itno,path) values(29,'1490675655783_70');
insert into phot(itno,path) values(29,'1490675655783_71');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 30,4,'삼성 올인원 컴퓨터','컴퓨터','2016-02-01','1년','택배',
'안녕하세요<br>
삼성 올인원 컴퓨터 팝니다.<br>
사용하지 않아 팝니다.<br>
정말 제발좀 입찰 제대로 해주세요. 0하나를 더 붙여서 금액이 높아 팔지 못하는 경우가 계속적으로<br>
일어나고 있습니다. 제발 입찰좀 똑바로 부탁합니다.<br>
CPU : i3-6100<br>
RAM : 4GB<br>
HDD : SSD 120GB + HDD 500G<br>
OS - 윈도우 10 (정품)<br>
모델명 : DM700A4K-KN35'
,30000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(30,'1490676101850_72');
insert into phot(itno,path) values(30,'1490676101851_73');
insert into phot(itno,path) values(30,'1490676101851_74');
insert into phot(itno,path) values(30,'1490676101851_75');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 31,2,'폴딩자전거 미니벨로 자전거','레져','2016-02-01','1년','택배',
'중고  자전거입니다.<br>
상태는 위 실 사진을 참조하여 신중히 구매해주세요.<br>
STRIDA 5.1 폴딩 미니벨로 중고자전거--   제품 상태 아주 깨끗합니다.<br>
알루미늄 차체<br>
전체적으로 프레임 스크레치   ,  안장 ,  타이어  등   사용감  있습니다.<br>
사진을 참조해주세요.<br>
참고로 권장 키 사이즈는 158-178입니다.<br>
키는 대략적인 것이므로 개 인마다  취양 및 선택기준이 조금씩 다르므로 이는 절대 적이지<br>
는 않으므 로 구매자가  판단하시기 바랍니다.<br>
상태는 위 실 사진을 참조해주세요.<br>
평길 주행이나 브레이크등 주행 사용상에는 하자없이 정비하여 발송합니다.'
,30000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(31,'1490676235001_76');
insert into phot(itno,path) values(31,'1490676235002_77');
insert into phot(itno,path) values(31,'1490676235002_78');
insert into phot(itno,path) values(31,'1490676235002_79');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 32,2,'삼천리자전거 LESPO','레져','2016-03-01','6개월','택배',
'삼천리자전거<br>
26인치 21단 기어 자전거<br>
초등학교 4-6학년이상 성인 여성등<br>
골고루  타기  적당할듯 합니다<br>
상태 양호하며<br>
잘 ~~ 나갑니다<br> 
웬만한 거리는 이 자전거로 다 해결이 됩니다 ^^<br>
사용기간은 정확하지 않습니다<br>
상태는 B급 입니다.<br>
저렴하고 실속있게 구입하고자 하는 분은<br>
보시고 구매하시면 좋겠습니다'
,30000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(32,'1490676417479_80');
insert into phot(itno,path) values(32,'1490676417479_81');
insert into phot(itno,path) values(32,'1490676417479_82');
insert into phot(itno,path) values(32,'1490676417480_83');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 33,1,'MTB STCATO 621','레져','2016-03-01','6개월','택배',
'성인용 생활 MTB<br>
STACATO 621<br>
원터치 씨마노 21단기어  풀세트<br>
부드럽고 승차감이 좋응 속업 쇼버<br>
제동력이 우수한 V브레이크 시스템<br>
매장진열상품<br>
완조립 상태로 택배배송<br>
받으시고 바로 주행 가능 하십니다.'
,100000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(33,'1490676855888_84');
insert into phot(itno,path) values(33,'1490676855889_85');
insert into phot(itno,path) values(33,'1490676855889_86');
insert into phot(itno,path) values(33,'1490676855889_87');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 34,1,'캐논데일 캐드10 로드사이클','레져','2013-02-01','2년','택배',
'프레임 : 2013 Cannondale Caad 10 (49size)<br>
휠 셋 : Matrix CX46 카본 클린쳐 매트릭스<br>
타이어 : TUFO C Elite ride (앞 25c 뒤 23c)<br>
구동계 : 시마노 10단 5750 그룹셋 (체인은 듀라에이스 10단 )<br>
안 장 : Sanmarco Concor 산마르코 콩코르<br>
페 달 : 시마노 105 클릿페달 케이지 : 본트래거 케이지<br>
<상세이력><br>
2013년 2월에 구입한 구동계 (누적 주행거리 약 2만km)<br>
2014년 2월에 구입한 프레임 (누적주행거리 약 1만 5천km)<br>
2015년 3월에 구입한 휠셋 (누적주행거리 약 8천km)<br>
2015년 8월 이후로는 거의 타지 못했습니다 (자전거에 대한 흥미가 많이 떨어짐)<br>
제 키는 174cm입니다.<br>
차체 사이즈 48<br>
수원 남부경찰서 인근'
,1000000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(34,'1490677065680_88');
insert into phot(itno,path) values(34,'1490677065681_90');
insert into phot(itno,path) values(34,'1490677065681_89');
insert into phot(itno,path) values(34,'1490677065682_91');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 35,2,'아팔란치아 팀콤프2.1D','레져','2013-02-01','2년','택배',
'▶ 제품명 - 아팔란치아 팀콤프2.1D<br>
▶ 휠 직경 - 26", 프레임 - 17"<br>
▶ 제동장치 - 기계식 디스크브레이크<br>
▶ 변속기외 주요부품 - 시마노 알투스 24단<br>
★ 점검및 수리로 작동상태(기어변속, 무소음)는 양호하며<br>
외관은 생활흠과 세월의 흔적(색바램,녹)은 있으나 깨끗한 편입니다.'
,100000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(35,'1490677221642_92');
insert into phot(itno,path) values(35,'1490677221643_93');
insert into phot(itno,path) values(35,'1490677221643_94');
insert into phot(itno,path) values(35,'1490677221643_95');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 36,1,'다용도정리함 4개 1set','생활품','2014-02-01','1년','택배',
'많은 입찰 부탁드립니다.'
,100000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(36,'1490677464468_96');
insert into phot(itno,path) values(36,'1490677464469_97');
insert into phot(itno,path) values(36,'1490677464470_98');
insert into phot(itno,path) values(36,'1490677464470_99');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 37,2,'PG Swiffer 물걸레','생활품','2017-03-01','0일','택배',
'*. 제조사 : P&G, 모델명 : Swiffer SWEEPER 물걸레 청소기,청소포 : 3매, 청소밀대세트를 판매합니다.<br>
*. 정품, 새상품입니다<br>
제조사 : P&G, <br>
모델명 : Swiffer SWEEPER 물걸레 청소기<br>
상품스펙 : 밀대, 밀대1개+물걸레청소포1매+정전기청소포2매, [밀대], 벨크로형, 봉길이조절, 패드고정홈, 밑판:25.5x11.5cm, 최대길이:124cm, [물걸레포], 물티슈형<br>
인터넷최저가 : (상품등록 시점기준)<br>
옥션최저가 : 16,900원(카탈로그에 매칭된 상품기준)'
,8000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(37,'1490677790169_0');
insert into phot(itno,path) values(37,'1490677790170_1');
insert into phot(itno,path) values(37,'1490677790169_100');
insert into phot(itno,path) values(37,'1490677790170_2');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 38,4,'6단신발정리대 미사용','생활품','2017-03-01','0일','택배',
'공간활용에아주좋은신발정리대입니다<br>
미사용새상품입니다<br>
튼튼함니다<br>
반값도안되는 저가판매로내놨습니다.'
,15000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(38,'1490678071875_3');
insert into phot(itno,path) values(38,'1490678071876_4');
insert into phot(itno,path) values(38,'1490678071876_5');
insert into phot(itno,path) values(38,'1490678071876_6');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 39,6,'일렉트로룩스 무선 청소기','생활품','2016-03-01','1년','택배',
'일렉트로룩스 충전식 무선 청소기 zb271wf 입니다.<br>
외관 생활상처 사용감이 많습니다.<br>
작동 기능은 정상 작동 되지만 밧데리가 약해 청소하기 어렵습니다.<br>
정크로 올리오니 많은 양해 바랍니다.<br>
밧데리 교체 수리용, 부품용, 연구용으로 사용 하실분께서<br>
구매 하시면 감사하겠습니다.<br>
부속품은 본체 와 충전 거치대 입니다.<br>
낮은 입찰가 이므로 반품이 안되오니 신중히 생각 하시고 구매 입찰 바랍니다.'
,5000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(39,'1490678349736_7');
insert into phot(itno,path) values(39,'1490678349737_8');
insert into phot(itno,path) values(39,'1490678349738_9');
insert into phot(itno,path) values(39,'1490678349738_10');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 40, 6,'필립스 헤어 드라이기','생활품','2017-03-01','0일','택배',
'필립스 헤어 드라이기  써모프로텍트 아이오닉 HP8244<br>
ThermoProtect Ionic 헤어드라이기<br>
미개봉 새제품 필립스 정품<br>
모 유명 대기업의 이벤트에 당첨되어 받은 겁니다.<br>
저에겐 기존에 사용하고 있는 헤어드라이기가 있어서 바로 내놓습니다.<br>
사용자들의 평이 좋은 모델입니다.<br>
미개봉 새제품이구요, 제가 받은 박스 그대로 보내드립니다.<br>
수량은 총 2개 있습니다. 2개 필요하신 분은 게시판에 남겨 주세요.<br>
궁금한 점 있으신 분은 상품문의에 질문 남겨 주세요'
,5000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(40,'1490678455144_11');
insert into phot(itno,path) values(40,'1490678455145_12');
insert into phot(itno,path) values(40,'1490678455147_13');
insert into phot(itno,path) values(40,'1490678455148_14');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 41, 1,'만화로 보는 세계명작 13권','도서','2017-03-01','0일','택배',
'책상태는 깨끗한 낙서.파손없는 소장용 중고입니다'
,5000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(41,'1490678881137_15');
insert into phot(itno,path) values(41,'1490678881137_16');
insert into phot(itno,path) values(41,'1490678881138_17');
insert into phot(itno,path) values(41,'1490678881138_18');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 42, 4,'중고서적 와신상담','도서','2017-03-01','0일','택배',
'책상태는 깨끗한 낙서.파손없는 소장용 중고입니다'
,5000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(42,'1490679151939_19');
insert into phot(itno,path) values(42,'1490679151940_20');
insert into phot(itno,path) values(42,'1490679151940_21');
insert into phot(itno,path) values(42,'1490679151941_22');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 43, 2,'TOYOTA 무한성장의 비밀','도서','2017-03-01','0일','택배',
'책상태는 깨끗한 낙서.파손없는 소장용 중고입니다'
,5000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(43,'1490679219586_23');
insert into phot(itno,path) values(43,'1490679219586_24');
insert into phot(itno,path) values(43,'1490679219587_25');
insert into phot(itno,path) values(43,'1490679219588_26');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 44, 3,'한솔 세계명작갤러리 37권','도서','2017-03-01','0일','택배',
'한솔 세계명작갤러리 37권<br>
책상태 좋아요.'
,5000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(44,'1490679342024_27');
insert into phot(itno,path) values(44,'1490679342024_28');
insert into phot(itno,path) values(44,'1490679342025_29');
insert into phot(itno,path) values(44,'1490679342025_30');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 45, 3,'만화로 익히는 철학이야기','도서','2017-03-01','0일','택배',
'<br>'
,5000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(45,'1490679524844_31');
insert into phot(itno,path) values(45,'1490679524844_32');
insert into phot(itno,path) values(45,'1490679524845_33');
insert into phot(itno,path) values(45,'1490679524845_34');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 45, 3,'만화로 익히는 철학이야기','도서','2017-03-01','0일','택배',
'<br>'
,5000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(45,'1490679524844_31');
insert into phot(itno,path) values(45,'1490679524844_32');
insert into phot(itno,path) values(45,'1490679524845_33');
insert into phot(itno,path) values(45,'1490679524845_34');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 46, 3,'G4 F500L 공기계','디지털','2016-03-01','6개월','택배',
'전통신사 사용가능한 상태좋은<br>
G4 브라운가죽판매합니다.<br>
외관및 액정상태 좋은폰입니다.<br>
정상해지후 판매하는 제품이니 대리점에서 확정기변후 안심하시고 사용하시면되는폰입니다.<br>
구성품은 사진과 같이 본체구성입니다.<br>
좋은제품이니 많은 입찰바랍니다^^'
,1000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(46,'1490679742927_35');
insert into phot(itno,path) values(46,'1490679742933_36');
insert into phot(itno,path) values(46,'1490679742934_37');
insert into phot(itno,path) values(46,'1490679742934_38');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 47, 3,'U+ 갤럭시노트 10.1','디지털','2016-03-01','6개월','택배',
'유플러스 갤럭시노트 10.1 P602L 화이트 판매합니다.<br>
노트 10.1의 두번째 제품으로 성능좋습니다.<br>
확정기변 가능한 상태로서 정상해지 되어있습니다.<br>
대리점에 방문후 전산등록후 안심하고 사용가능한 상태입니다.<br>
구성품은 사진과 같이 본체구성입니다.<br>
좋은 제품이니 많은 입찰부탁드립니다.'
,1000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(47,'1490679868219_39');
insert into phot(itno,path) values(47,'1490679868220_40');
insert into phot(itno,path) values(47,'1490679868220_41');
insert into phot(itno,path) values(47,'1490679868221_42');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 48, 3,'iPhone6 plus','디지털','2016-03-01','6개월','택배',
'아이폰 6 플러스 입니다.<br>
잘 되던 폰인데, 액정이 깨져서 액정을 교체하고 이왕이면 깨끗하게 사용하려고<br>
폰 바디도 새것으로 교체했습니다.<br>
그런데...<br>
액정과 폰 바디를 교체한 후 사진에 보이는 화면에서 다음으로 넘어가지를 않네요. ㅠㅠ<br>
뭐가 잘 못되었는지 모르겠습니다.<br>
현재 아이클라우드는 설정을 풀어놔서 폰만 되기만 하면 누구나 사용할 수 있는데...<br>
사진처럼 다음 화면으로 넘어가지 않네요.<br>
일단 부품용으로 올리니 필요하신 분 가져가세요.<br>
사진에 보이는 사용하지 않은 폰 케이스도 함께 드립니다.<br>
설명 그대로 부품용으로 드리니 반품은 없는 것으로 하겠습니다.'
,1000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(48,'1490679992821_43');
insert into phot(itno,path) values(48,'1490679992821_44');
insert into phot(itno,path) values(48,'1490679992822_45');
insert into phot(itno,path) values(48,'1490679992822_46');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 49, 3,'SM-N910K 갤럭시노트4','디지털','2016-03-01','6개월','택배',
'상태 매우 좋은 갤럭시노트4 판매합니다.<br>
사용하는 동안 필름 & 케이스 계속 씌우고 사용했기에 전체적으로 깨끗합니다.<br>
콕 한부분이나 벗겨진 부분은 전~혀 없습니다.<br>
구성품은 본체, 배터리1개 이렇게 있습니다.<br>
무엇보다 제품의 상태는 최강입니다.<br>
꼭 필요하신분이 가져가셔서 유용하게 사용하시기 바랍니다.<br>
즉시구매하시는 분께는 충전기도 새걸로 함께 보내드립니다.'
,1000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(49,'1490680117432_47');
insert into phot(itno,path) values(49,'1490680117433_48');
insert into phot(itno,path) values(49,'1490680117433_49');
insert into phot(itno,path) values(49,'1490680117434_50');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 50, 3,'LG-F240S 옵티머스G','디지털','2016-03-01','6개월','택배',
'상태 깨끗한 옵티머스G 프로 판매합니다.<br>
사진에서 확인되시듯이 전체적인 상태 매우 깨끗합니다.<br>
사자마자 필름 & 케이스 씌워서 사용해서 깨끗할 수 밖에 없습니다.<br>
또한 휴대폰을 거의 사용하지 않으시는 할머니가 사용하시던거라 깨끗할수 밖에 없습니다.<br>
하지만 자세히 보셔야 보이는 살~짝 콕 한부분은 있습니다.<br>
구성품은 본체, 배터리2개, 충전거치대 이렇게 있습니다.<br>
설명 드렸듯이 물건은 매우 좋습니다.'
,1000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(50,'1490680209926_51');
insert into phot(itno,path) values(50,'1490680209927_52');
insert into phot(itno,path) values(50,'1490680209927_53');
insert into phot(itno,path) values(50,'1490680209930_54');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(51,1,'시티즌 시계','패션','2016-01-01','30일','택배','시티즌 시계 입니다. 정품, 새제품이고 택, 내부구성품, 박스 그대로 입니다',now(),70000);

insert into phot(itno,path) values(51,'1487897161498_24');
insert into phot(itno,path) values(51,'1487897161498_25');
insert into phot(itno,path) values(51,'1487897161498_26');
insert into phot(itno,path) values(51,'1487897161498_27');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(52,2,'HP파빌리온G7','디지털','2016-02-21','100일','택배','HP 파빌리온G7

CPU : AMD A6 4400 2.7Ghz<br>
RAM : 6GB DDR3 RAM<br>
HDD : 320GB SATA<br>
VGA : 라데온HD7520G<br>

화면 : 17인치 LED 대화면 <br> 
유.무선 인터넷 사용가능<br>
HDMI 블루투스 웹캠<br>

본제품 HP 파빌리온G7 노트북입니다. 대화면노트북으로 제품상태 깨끗하며 사무작업 인터넷쇼핑 영화감상등 기본적인사용과 고사양 게임들도 원활합니다. 배터리 완충시 평균3시간 내외 사용가능합니다. 사용하실프로그램 권장사양비교후 신중한 입찰 부탁드립니다. 낙찰가에 보내드리며 착불3000원입니다. 좋은거래 부탁드립니다. 감사합니다.<br>
구성품 노트북 + 아답터<br>' ,now() + interval 30 minute,100000);

insert into phot(itno,path) values(52,'1487897579286_28');
insert into phot(itno,path) values(52,'1487897579287_29');
insert into phot(itno,path) values(52,'1487897579287_30');
insert into phot(itno,path) values(52,'1487897579288_31');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(53,3,'샤넬 토드백 겸 숄더','패션','2016-12-01','30일','택배','샤넬(CHANEL) 카프스킨 블랙 COCO 은장로고 서프 토드백 겸 숄더스트랩 2WAY

소재: 겉감 - 천연 소가죽 100%, 안감 - 레이욘 100%<br>
SIZE :(측정하는 사람이나 방향에 따라 차이가 날 수 있음.)<br>
가 로( L 넓이 ) - 36~39cm<br>
세 로( W 폭 ) - 15cm<br>
높 이( H ) - 24cm<br>
끈 길이(가방 상부 끝에서 끈 꼭지점 까지) - 22cm<br>
숄더 스트랩 길이 - 60cm<br>
색 상 : 사진색과 같음(모니터에 따라 약간의 차이가 있음)<br>
원산지 : FRANCE<br>
제조사 : CHANEL INC.<br>

설명이 더이상 필요없는 명품 가방의 대명사 샤넬 카프스킨 블랙 COCO 은장로고 서프 토드백 겸 숄더스트랩 2WAY백 입니다~<br>
엄선한 프랑스산 송아지 가죽을 샤넬만의 특유의 기술로 정밀가공하여 숙련된 프랑스 장인들의 꼼꼼한 솜씨로 한땀 한땀 정성을 다해 제작한 명품 샤넬 카프스킨 블랙 COCO 은장로고 서프 토드백 겸 숄더스트랩 2WAY백 입니다~<br>
카프스킨가방의 최고봉으로 편리함과 럭셔리함을 더한 샤넬 명품중의 명품 샤넬 카프스킨 블랙 COCO 은장로고 서프 토드백 겸 숄더스트랩 2WAY백 입니다.<br>', now() + interval 60 minute, 300000);

insert into phot(itno,path) values(53,'1487898025542_32');
insert into phot(itno,path) values(53,'1487898025543_33');
insert into phot(itno,path) values(53,'1487898025543_34');
insert into phot(itno,path) values(53,'1487898025544_35');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(54,4,'캐논 정품 EOS-700D','디지털','2016-03-21','15일','택배','본제품은 캐논 정품이며 무상A/S가능한제품입니다.
액정회전식으로 셀프카메라촬영이가능하며 동영상촬영이가능합니다.<br>
낙찰시 아래에명시한 기본구성품이발송되며 즉시구매시 10만원상당의 32GB풀패키지구성으로 발송해드리는 행사를진행하고있습니다.<br>
DSLR 카메라세트의경우 본체 바디보다 렌즈에따라 가격이 천차만별입니다.<br>
풀 HD동영상촬영 DSLR의경우 메모리의 용량에따라 동영상촬영시간이달라집니다.<br>
1시간이상의 넉넉한동영상촬영과 사진촬영을위해서는 32GB메모리를권장합니다.<br>
DSLR카메라는 필수부수기재가있습니다.<br>
구성품을 잘비교하여 구입하시는것이 DSLR카메라구입요령입니다.<br>
동급최강의 기능과 화소수 선명한색감 편리한조작법으로 초보분들도 손쉽게 멋진촬영을하실수있는 현재 최고의인기카메라이며 캐논의 최신형 DSLR카메라입니다.<br>
두드러지는그능으로는 전기능 액정터치조작 / 자동초점 풀HD 동영상촬영 / 라이브뷰지원 / 360도 회전가능한 3인치 LCD액정 / 1800만화소수 / ISO12800지원 / 초당 5매의 초고속연사촬영등..현존 DSLR최강의 스펙을 자랑합니다.<br>
특히 전기능 액정터치조작은 캐논의 독자적인 최신기능입니다.<br>
DSLR카메라는 렌즈가생명입니다.<br>
일반적으로 DSLR구입시 기본렌즈 18-55mm가제공됩니다.<br>
하지만 고배율줌과 접사를위해서는 망원렌즈와 접사용렌즈를 추가로구입하여 렌즈2개 또는 3개구성이됩니다.<br>
렌즈가 여러개면 더비싸보이고 좋을것같지만 결코잘못된생각입니다.<br>
DSLR을 시작하시면서 렌즈2개~3개구성은 버거운구성입니다.특히 여행또는 출사시에 렌즈여러개가지고다니시면서 상황에따라번갈아장착한다는게 실제로는 정말 귀찮고 무겁고 힘든일입니다.<br>
탐론 18-200mm렌즈는 이러한 불편을한번에해결해주는 접사~망원까지가능한 울트라통합접사망원줌렌즈입니다.<br>
쉽게설명드리자면 탐론18-200mm = 접사용렌즈(100mm)+기본렌즈(18-55mm)+망원렌즈(55-200mm)입니다.<br>
렌즈하나로 렌즈3개의성능을발휘하며 화질또한 최고의결과물을 선사해주며 가격면에서도 경제적인렌즈입니다.<br>
기본구성품(일반낙찰시제공)<br>
1.캐논 700D 바디 2.탐론 18-200mm 렌즈(후드제외) 3.배터리 4.충전기 5.스트랩(어깨끈) 6.바디캡 7.렌즈보호캡 8.USB연결잭 9.외부영상연결잭 10.캐논카달로그 11.정품보증서 12.사용설명서 13.소프트웨어CD 14.4GB메모리<br>',now() + interval 90 minute,300000);

insert into phot(itno,path) values(54,'1487898434996_36');
insert into phot(itno,path) values(54,'1487898434996_37');
insert into phot(itno,path) values(54,'1487898434996_38');
insert into phot(itno,path) values(54,'1487898434997_39');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(55,5,'닥터데스크 높낮이 조절 책상','가구','2016-02-01','1년 1개월','택배','안녕하세요.
닥터데스크 일반형 판매합니다.<br>
"일.반.형" 입니다.<br>

7개월 동안 사용했고 밑에 지지하는 고무가 잘 떨어져 글루건으로 보강해놓았습니다.<br>
사용법은 닥터데스크 홈페이지의 http://doctordesk.co.kr/board/free/read.html?no=23&board_no=1에 나와 있습니다.<br>',now() + interval 120 minute, 30000);

insert into phot(itno,path) values(55,'1487898661109_40');
insert into phot(itno,path) values(55,'1487898661110_41');
insert into phot(itno,path) values(55,'1487898661110_42');
insert into phot(itno,path) values(55,'1487898661111_43');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(56,2,'헥스 통기타 HONEY G240C','취미','2016-01-01','1년 2개월','택배 또는 직거래','두달전에 구입한 헥스 통기타 입니다.<br>
튜너기,줄감개,기타 스트랩,피크2개,피크케이스,가방,통기타책3권을<br>
같이 드립니다.전체적으로 깨끗한 상태이고 줄교체과정에서 브릿지핀에 약간의 기스가있습니다.<br>
직거래는 경기도 지역에서 가능합니다.<br>',now() + interval 150 minute,20000);

insert into phot(itno,path) values(56,'1487898952886_44');
insert into phot(itno,path) values(56,'1487898952886_45');
insert into phot(itno,path) values(56,'1487898952887_46');
insert into phot(itno,path) values(56,'1487898952887_47');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(57,5,'엘파마 MTB','레져','2016-01-01','6개월','직거래','구매 7개월 된 MTB자전거 팝니다,<br>
실사용은 3회이며 총 60km 정도 주행 했으며 사진처럼 새거대비 95%이상되는 제품입니다.<br>
꼭 구매할분만 입찰해주시고 태클및 장난입찰은 정중히 사양합니다<br>
되도록이면 부산 인근에서 사시는분들과 직 거래를 우선합니다.<br>',now() + interval 180 minute,450000);

insert into phot(itno,path) values(57,'1487912711572_0');
insert into phot(itno,path) values(57,'1487912711573_1');
insert into phot(itno,path) values(57,'1487912711573_2');
insert into phot(itno,path) values(57,'1487912711574_3');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(58,3,'JBL 북쉘프 스피커','디지털','2016-01-11','7개월','택배 또는 직거래','
JBL 노스리지 북쉘프 스피커 팝니다.<br>
돔트위터와  5인치 우퍼 조합이고
8옴입니다<br>
사이즈는 
가로16.5 세로24 폭15 입니다<br>
전체 적으로 상태 좋습니다.<br>
중고 특성상 반품 불가입니다<br>',now() + interval 210 minute,30000);

insert into phot(itno,path) values(58,'1487912907326_4');
insert into phot(itno,path) values(58,'1487912907326_5');
insert into phot(itno,path) values(58,'1487912907327_6');
insert into phot(itno,path) values(58,'1487912907327_7');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(59,5,'삼성 SSD 840 250GB','디지털','2016-11-21','4개월','택배','
삼성 840 SSD 입니다.<br>
250GB구요 본체 OS 백업용으로 들고 있어 사용시간 짧아요<br>
필요하신분 입찰부탁드려요~<br>',now() + interval 240 minute,30000);

insert into phot(itno,path) values(59,'1487913225052_8');
insert into phot(itno,path) values(59,'1487913225052_9');
insert into phot(itno,path) values(59,'1487913225053_10');
insert into phot(itno,path) values(59,'1487913225053_11');


insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(60,1,'커세어 기계식 키보드 k65 RGB','컴퓨터','2017-03-27','0일','직거래','미개봉 상품이며 한국 정품입니다. <br>1년 무상 수리 가능합니다.<br>', now() + interval 270 minute,170000);


insert into phot(itno,path) values(60,'12345555.jpeg');
insert into phot(itno,path) values(60,'11234.jpeg');
insert into phot(itno,path) values(60,'1223456.jpeg');
insert into phot(itno,path) values(60,'1222.jpeg');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(61,5,'드롱기 전기포트','생활품','2016-04-01','3개월','택배','
최신 트렌드로 손꼽히는 빈티지와 레트로 컨셉을 반영한 아이코나 빈티지의 스타일리시한 주전자입니다.<br>
 3단계안전 시스템: 1)물이 끓으면 자동으로 전원 차단<br>
 2) 온도 센서를 통한 전원 제어 <br>
3)본체가 받침대에서 분리될 시 자동으로 전원 차단<br>
 사이즈 : 23 * 23 * 26.5cm<br>
',now() + interval 300 minute,45000);

insert into phot(itno,path) values(61,'22.png');
insert into phot(itno,path) values(61,'222.png');
insert into phot(itno,path) values(61,'2222.png');
insert into phot(itno,path) values(61,'222222.png');


insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(62,2,'[미개봉]레고 심슨하우스','취미','2016-02-22','0일','직거래','
클래식 애니메이션 TV 시리즈 심슨™ 가족의 흥미로운 장면들을 재현해 보세요.<br>
 스프링필드를 그대로 옮겨 놓은 듯한 이 놀라운 모델 세트는 많은 수의 정교한 레고® 블록으로
 구성되어 있습니다.<br>
미니피겨 6개(호머, 마지, 바트, 리사, 매기, 네드 플랜더스)가 들어 있습니다.<br>   
',now() + interval 330 minute,260000);

insert into phot(itno,path) values(62,'55.jpg');
insert into phot(itno,path) values(62,'555.jpg');
insert into phot(itno,path) values(62,'5555.jpg');
insert into phot(itno,path) values(62,'555555.jpg');


insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(63,4,'드롱기 전기포트','생활품','2016-07-01','3개월','직거','
최신 트렌드로 손꼽히는 빈티지와 레트로 컨셉을 반영한 아이코나 빈티지의 스타일리시한 주전자입니다.<br>
 3단계안전 시스템: 1)물이 끓으면 자동으로 전원 차단<br> 
2) 온도 센서를 통한 전원 제어<br>
 3)본체가 받침대에서 분리될 시 자동으로 전원 차단 <br>
사이즈 : 23 * 23 * 26.5cm<br>
',now() + interval 360 minute,40000);

insert into phot(itno,path) values(63,'333.png');
insert into phot(itno,path) values(63,'33333.png');
insert into phot(itno,path) values(63,'333333.png');
insert into phot(itno,path) values(63,'333333333.png');


insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(64,2,'커세어 텐키리스 키보드 k65','컴퓨터','2016-08-27','0일','직거래','미개봉 상품이며 한국 정품입니다.<br>
 1년 무상 수리 가능합니다.<br> 기계식 키보드의 장점을 가득 담고 있어 키감 완전 좋습니다.<br>', now() + interval 390 minute,170000);

insert into phot(itno,path) values(64,'12345555.jpeg');
insert into phot(itno,path) values(64,'11234.jpeg');
insert into phot(itno,path) values(64,'1223456.jpeg');
insert into phot(itno,path) values(64,'1222.jpeg');


insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(65,3,'신일 SEH-G800','생활품','2016-12-27','2개월','직거래','냄새걱정, 연기걱정, 소음걱정이 없습니다.<br>
전도 안전 스위치 : 제품이 기울거나 넘어질 경우 자동으로 전원이 차단됩니다.<br>
2단 온열 조절버튼 : 2단 온열 조절 버튼이 있어 원하는 온도로 설정하여 사용 할 수 있습니다.<br>
신속하고 편리한 A/S : 50년 전통의 계절가전의 명가!! 전국 60여개의 전국서비스망으로 신속한 A/S가 가능합니다.<br>', now() + interval 420 minute,17000);

insert into phot(itno,path) values(65,'12.jpeg');
insert into phot(itno,path) values(65,'13.jpeg');
insert into phot(itno,path) values(65,'14.jpeg');
insert into phot(itno,path) values(65,'15.jpeg');



insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(66,6,'윌리콧 백팩','가방','2016-08-27','6개월','직거래','willcot(윌리콧)은 2009년 오스트레일리아의 젊은 디자이너 두명과 국내교포 몇명에 의해<br>
직접 여행용 가방을 제작해 지니고 다닌 것으로 시작됩니다.<br>
그 후 해가 거듭하여 윌리콧을 재발견한 교역회사가 더욱 많은 사람들에게 합리적이<br>
무엇보다도 튼튼한 제품을 가져다 드릴수 있도록 발전되었습니다.<br>
오랫동안 지니고 다닐수록 더욱 편리하여, 견고하며, 도시에서 살아가는 현대적인 형태<br>
여행자들의 개성을 반영한 제품을 개발합니다.<br>
우리의 여행의 개념은 자연 및 장거리 여행뿐만 아닌 현대도시에서의 다양한 여행을 뜻합니다.<br>', now() + interval 450 minute,30000);

insert into phot(itno,path) values(66,'16.jpeg');
insert into phot(itno,path) values(66,'17.jpeg');
insert into phot(itno,path) values(66,'18.jpeg');
insert into phot(itno,path) values(66,'19.jpeg');


insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(67,1,'이스트팩 백팩','가방','2016-11-29','3개월',
'택배 또는 직거래','1979년 처음 만들어진 이후로 백투베이직이란 심플하고 베이직하면서 실용성을 강조한<br>
라인과 빌트투 레지스트 아티스오의 콜라보레이션 작업을 통한 유니크한 스타일을 만드는 이스트백<br>
수납이 넉넉하고 다용도로 활요어이 많은 프로바이더가 남녀노소 모든 사람들로부터 인기를 얻으며 이스트백이 다시한번 주목받고 있다.<br>', now() + interval 480 minute,50000);

insert into phot(itno,path) values(67,'20.jpeg');
insert into phot(itno,path) values(67,'21.jpeg');
insert into phot(itno,path) values(67,'22.jpeg');
insert into phot(itno,path) values(67,'23.jpeg');


insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(68,2,'하이엔드 게이밍 마우스','생활품','2015-12-29','6개월',
'택배 또는 직거래','A700 하이엔드 게이밍 마우스는 옴론 스위치 탑재로 반응 속도는 물론 20,000,000회의<br>
버튼 수명으로 튼튼한 내구성을 자랑하며 탁월한 성능의 아바고 ADNS A9800 레이저 센서 탑재로 게임은 물론,<br>
정밀한 작업, 사무, 인터넷 등 모든 환경에서 만족하실 수 있습니다.<br>
A700 하이엔드 게이밍 마우스는 손쉽게 5단계 DPI를 설정할 수 있으며 1000 DPI부터 16400 DPI까지 정밀한 설정 부터 빠른 조작까<br>
다양한 감도를 지원하여 정밀한 작업은 물론 게임, 문서 작업, 웹서핑 등에 탁월한 성능을 선보입니다.<br>
또한 DPI 변환에 따라 휩 LED 컬러도 5가지 컬러로 변환하여 DPI 상태를 쉽게 인지할 수 있는 것은 물론 기본 제공되는 소프트웨어를 통<br>
기본 LED 컬러및 효과를 설정하여 자신에게 맞는 디자인으로 커스텀하여 사용할 수 있습니다.<br>
USB 방식으로 자동으로 드라이버가 설치되며 기본 스프트 웨어 제공으로 사용자의 편의에 맞게 다양한 설정을 지원합니다.', now() + interval 480 minute,50000);

insert into phot(itno,path) values(68,'24.jpeg');
insert into phot(itno,path) values(68,'25.jpeg');
insert into phot(itno,path) values(68,'26.jpeg');
insert into phot(itno,path) values(68,'27.jpeg');


insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(69,3,'코맥 엔틱원톡 그라인더','생활품','2016-04-12','9개월',
'택배','이중날 구조로 분쇄효과가 뛰어남<br>
그라인더 상단이 돔형으로 되어있어 내부에 먼지가 들어가지 않는 구조<br>
커피분말의 굵기 조절이 가능<br>
25년 역사의 믿을 수 있는 코맥제품 입니다.<br>
외양이 비슷하다해서 모두 같은 품질의 제품이 아닙니다.<br>', now() + interval 540 minute,10000);

insert into phot(itno,path) values(69,'28.jpeg');
insert into phot(itno,path) values(69,'29.jpeg');
insert into phot(itno,path) values(69,'30.jpeg');
insert into phot(itno,path) values(69,'31.jpeg');


insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(70,5,'잠만보인형','취미','2017-01-13','1개월',
'직거래','졸음 포켓몬인 잠만보 현태의 귀요미 사이즈 인형<br>
침대위 쿠셥이나 쇼파 등 다양한 공간에서 활용가능<br>
촉감이 매우 부드러운 원단 사용<br>', now() + interval 600 minute,8000);

insert into phot(itno,path) values(70,'32.jpeg');
insert into phot(itno,path) values(70,'33.jpeg');
insert into phot(itno,path) values(70,'34.jpeg');
insert into phot(itno,path) values(70,'35.jpeg');


insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(71,6,'삼성노트북 NT550P7C-S59','컴퓨터','2016-05-23','8개월',
'직거래','삼성 노트북 5 Boost는 심플하고 클래식한 메탈 실버 색상을 채택하여 특유의 이지적이고 깔끔한을 돋보이게 합니다.<br>
외관으로나 성능으로나 만족을 드리는 삼성노트북5 Boost로 당신의 컴퓨팅 환경을 한 단계 업그레이드 해 보세요.<br>
삼성 노트북 5 Boost는 NVIDIA® GeForce® GT 650M 2GB gDDR3(Optimus™) GPU로 높은 그래픽 사양을 요구하는 프로그램을 사용할 때는 외장 그래픽으로,<br>
 기본 프로그램을 사용할 때는 내장 그래픽을 사용하여 배터리 소모를 줄일 수 있습니다.<br>
삼성 노트북 5 Boost는 JBL 스테레오 스피커(우퍼 포함 3개)를 채용하여 게임의 생생한 소리는 물론 영화 감상이나 음악 감상도 다이내믹하게 <br>
즐기실 수 있습니다. JBL 스피커의 높은 품질과 현실적인 서라운드 사운드를 느껴보세요.<br>
삼성 노트북 5 Boost는 대기 상태에서 전원 버튼을 누르거나 덮개를 열면 2초대에 작업이 시작되어 기다릴 필요가 없습니다.<br>
배터리가 방전되더라도 단 2초 대면 기존에 하던 작업을 바로 시작할 수 있어 편리합니다. 삼성의 독자적인 Fast Start로 더욱 빠르고 효율적으로 작업하세요.<br>
삼성 노트북 5 Boost는 1TB 용량의 HDD(하드디스크 드라이브)를 탑재하여 많은 프로그램을 설치하더라도 충분한 빈 공간을 확보할 수 있으며, 대용량 사진이나 영화 등의 자료 보관이 용이합니다.<br>', now() + interval 630 minute,350000);
 

insert into phot(itno,path) values(71,'37.jpeg');
insert into phot(itno,path) values(71,'38.jpeg');
insert into phot(itno,path) values(71,'39.jpeg');
insert into phot(itno,path) values(71,'40.jpeg');


insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(72,1,'기계식 키보드','디지털','2016-12-24','3개월',
'직거래','기계식키보드 이며 실사용 3개월 밖에 안되어 비교적 깨끗합니다.<br>', now() + interval 660 minute,13000);
 
insert into phot(itno,path) values(72,'41.jpeg');
insert into phot(itno,path) values(72,'42.jpeg');
insert into phot(itno,path) values(72,'43.jpeg');
insert into phot(itno,path) values(72,'44.jpeg');


insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(73,2,'맥프로 레티나 13인치','컴퓨터','2017-01-13','2개월',
'직거래','맥프로 스페이스 그레이 13인치<br>
내장된 디스플레이에서 수백만 색상으로 기본 최대 해상도와 다음을 동시지원:<br>
60Hz에서 10억 이상의 색상으로 5120 * 2880 해상도 디스플레이 1대 지원<br>
USB-C를 통한 기본 DisplayPort 출력<br>', now() + interval 690 minute,2000000);
 
insert into phot(itno,path) values(73,'46.jpeg');
insert into phot(itno,path) values(73,'47.jpeg');
insert into phot(itno,path) values(73,'48.jpeg');
insert into phot(itno,path) values(73,'49.jpeg');



insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(74,3,'한일 전기 온풍기','생활품','2015-02-13','1년 6개월',
'택배','개인용으로 사용하는 미니온풍기 입니다.<br>
본체가 쓰러졌을 때 자동안전장치가 작동하여 자동으로 전원이 차단됩니다.<br>
본 제품은 전기용품안전관리법에 의거 산업자원부가 지정한 공인기관 KETI를 통해 전기안전인증을 받은 제품임을 알려드립니다.<br>', now() + interval 710 minute,15000);
 
insert into phot(itno,path) values(74,'50.jpeg');
insert into phot(itno,path) values(74,'51.jpeg');
insert into phot(itno,path) values(74,'52.jpeg');
insert into phot(itno,path) values(74,'53.jpeg');


insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(75,4,'스텔스 본체','컴퓨터','2016-08-13','7개월',
'직거래','전례없는 놀라운 수용및 확장성<br>
돋보이는 쾌적한 냉각 솔루션<br>
고성능 컴퓨팅을 위한 최적의 파트<br>
거대한 차세대 2nd	Generation Stealth 9902 Platform 을 기반으로 전례 없는 수준의 놀라운 확장성을 구현하였습니다.<br>
고성능 시스템을 구축하기 위한 최고의 파트너가 될 것입니다.<br>
최대 10개의 팬을 장착할 수 있을 뿐만 아니라 최대 360mm 규격의 일체형 수랭쿨러 라디에이터까지 수용할 수 있으므로 고성능 시스템에 가장 최적화 된 솔루션을 제공합니다.<br>
안정적인 시스템 운용을 위한 냉각 설계 및 레이아웃, 더 편리하고 쉬운 사용을 위한 배치 및 설계를 통해 직접 구상하고 있던 이상적인 시스템을 실현해 보세요.<br>', now() + interval 740 minute,900000);
 
insert into phot(itno,path) values(75,'54.jpeg');
insert into phot(itno,path) values(75,'57.jpeg');
insert into phot(itno,path) values(75,'56.jpeg');
insert into phot(itno,path) values(75,'58.jpeg');



insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(76,5,'로지텍 G700s','컴퓨터','2016-01-05','1년 2개월',
'직거래','로지텍은 게이밍 제품을 가벽게 생각하지 않습니다.<br>
게이밍 제품은 게이머들의 역량을 100% 발휘할 수 있게 도와주는 정밀 기기입니다.<br>
게이머가 승부를 위해 끊임없는 도전을 하듯,로제텍의 엔지니어들 또한 과학적 근거를 통해 게이밍 제품의 한계에 도전합니다.<br>
유선마우스의 퍼포먼스보다 뛰어난 무선 게이밍 마우스<br>
프로그래밍이 가능한 13개의 매크로 키<br>
기존 마우스보다 8배나 빠른 속도<br>
초고속 듀얼모드 스크롤휠<br>
충전이 마우스 작동을 방해하지 않는 데이터 오버 케이블<br>', now() + interval 770 minute,90000);
 
insert into phot(itno,path) values(76,'63.jpeg');
insert into phot(itno,path) values(76,'64.jpeg');
insert into phot(itno,path) values(76,'65.jpeg');
insert into phot(itno,path) values(76,'66.jpeg');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 77,1,'닥스 DAKS 정품시계','패션','2016-08-20','2개월','택배',
'ㅋ'
,50000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(77,'1490854539269_9');
insert into phot(itno,path) values(77,'1490854539269_10');
insert into phot(itno,path) values(77,'1490854539270_11');
insert into phot(itno,path) values(77,'1490854539271_12');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 78,1,'카시오 아나디지 시계','패션','2016-08-20','2개월','택배',
'ㅋ'
,100000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(78,'1490854630094_13');
insert into phot(itno,path) values(78,'1490854630094_14');
insert into phot(itno,path) values(78,'1490854630095_15');
insert into phot(itno,path) values(78,'1490854630095_16');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 79,1,'오디세이 세라믹베젤 시계','패션','2016-08-20','2개월','택배',
'ㅋ'
,10000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(79,'1490854722730_17');
insert into phot(itno,path) values(79,'1490854722730_18');
insert into phot(itno,path) values(79,'1490854722732_19');
insert into phot(itno,path) values(79,'1490854722732_20');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 80,1,'명품 시계 엠프리오 알마니','패션','2016-08-20','2개월','택배',
'ㅋ'
,10000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(80,'1490854803910_21');
insert into phot(itno,path) values(80,'1490854803911_22');
insert into phot(itno,path) values(80,'1490854803911_23');
insert into phot(itno,path) values(80,'1490854803912_24');

insert into item(itno,mno,titl,categ,buy,day,deal,cont,stpc,time)
select 81,1,'ELEGANGS 시계','패션','2016-08-20','2개월','택배',
'ㅋ'
,30000,time + interval 30 minute
from item
order by time desc
limit 1;
insert into phot(itno,path) values(81,'1490854879567_25');
insert into phot(itno,path) values(81,'1490854879567_26');
insert into phot(itno,path) values(81,'1490854879568_27');
insert into phot(itno,path) values(81,'1490854879569_28');


insert into qna(mno,itno,qus,qtm,ans,atm)
values(1,51,'윈도우 설치되어있는 상품인가요?',now(),'저희 출고되는 제품은 정품 제품 설명에 고지된 대로 정품 소프트웨어만을 제공합니다.',now());
insert into qna(mno,itno,qus,qtm,ans,atm)
values(2,51,'모니터 듀얼로 가능한가요?',now(),'RGB HDMI DISPLAY포트가 있으며 듀얼모니터로 사용 가능합니다.',now());
insert into qna(mno,itno,qus,qtm,ans,atm)
values(3,51,'윈도우 설치되어있는 상품인가요?',now(),'저희 출고되는 제품은 정품 제품 설명에 고지된 대로 정품 소프트웨어만을 제공합니다.',now());
insert into qna(mno,itno,qus,qtm,ans,atm)
values(4,51,'윈도우 설치되어있는 상품인가요?',now(),'저희 출고되는 제품은 정품 제품 설명에 고지된 대로 정품 소프트웨어만을 제공합니다.',now());
insert into qna(mno,itno,qus,qtm,ans,atm)
values(5,51,'윈도우 설치되어있는 상품인가요?',now(),'저희 출고되는 제품은 정품 제품 설명에 고지된 대로 정품 소프트웨어만을 제공합니다.',now());
insert into qna(mno,itno,qus,qtm,ans,atm)
values(6,51,'윈도우 설치되어있는 상품인가요?',now(),'저희 출고되는 제품은 정품 제품 설명에 고지된 대로 정품 소프트웨어만을 제공합니다.',now());
insert into qna(mno,itno,qus,qtm)
values(1,51,'윈도우 설치되어있는 상품인가요?',now());
insert into qna(mno,itno,qus,qtm)
values(2,51,'윈도우 설치되어있는 상품인가요?',now());


insert into qna(mno,itno,qus,qtm,ans,atm)
values(1,54,'카메라 렌즈는 더 없나요?',now(),null,null);
insert into qna(mno,itno,qus,qtm,ans,atm)
values(2,54,'렌즈 상태 확인 가능한가요??',now(),'약간의 스크레치가 있습니다.',now());
insert into qna(mno,itno,qus,qtm,ans,atm)
values(3,54,'사진을 좀 더 볼수 있을까요?',now(),null,null);
insert into qna(mno,itno,qus,qtm,ans,atm)
values(5,54,'SD카드는 없나요??',now(),null,null);
insert into qna(mno,itno,qus,qtm,ans,atm)
values(7,54,'카메라 컷수는 얼마나 되죠??',now(),'컷수는 3225회 입니다',now());

insert into bdhs(mno,itno,bids,time)
values(4,51,70000,now());
insert into bdhs(mno,itno,bids,time)
values(3,51,71000,now());
insert into bdhs(mno,itno,bids,time)
values(2,51,72000,now());
insert into bdhs(mno,itno,bids,time)
values(1,51,73000,now());
insert into bdhs(mno,itno,bids,time)
values(5,51,74000,now());
insert into bdhs(mno,itno,bids,time)
values(3,51,75000,now());
insert into bdhs(mno,itno,bids,time)
values(7,51,76000,now());
insert into bdhs(mno,itno,bids,time)
values(1,51,77000,now());
insert into bdhs(mno,itno,bids,time)
values(3,51,78000,now());
insert into bdhs(mno,itno,bids,time)
values(5,51,79000,now());