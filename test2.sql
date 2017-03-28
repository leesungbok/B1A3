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

insert into item(itno,mno,titl,categ,buy,day,deal,cont,time,stpc)
values(51,1,'시티즌 시계','패션','2016-01-01','30일','택배','시티즌 시계 입니다. 정품, 새제품이고 택, 내부구성품, 박스 그대로 입니다',now(),70000);

insert into phot(itno,path) values(51,'1488953845219_0');
insert into phot(itno,path) values(51,'1488953845219_1');
insert into phot(itno,path) values(51,'1488953845219_2');
insert into phot(itno,path) values(51,'1488953845219_3');

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



