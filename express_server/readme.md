### Go to express_server directory
cd express_server
npm install

### Run
npm run build_start


```
create table test
(
    id     varchar(255) not null     primary key,
    age         int,
    joinedAt    timestamp,
    entryDate   date,
    amount      double precision,
    activeFlag  boolean

);

insert into test(id,age,joinedAt,entryDate,amount,activeFlag)
values
('1',10,'2022-12-28 04:08:19.124944','2022-12-28',100.50,true),
('2',11,'2022-12-29 04:08:19.124944','2022-12-29',200.50,false)
```



