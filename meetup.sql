
CREATE TABLE "tag" (
	"id" BIGSERIAL NOT NULL PRIMARY KEY ,
	"title" VARCHAR(255) NOT NULL
) WITH (
  OIDS=FALSE
);


CREATE TABLE "meeting" (
	"id" BIGSERIAL NOT NULL PRIMARY KEY ,
	"topic" VARCHAR(50) NOT NULL,
	"tag" integer NOT NULL,
	"date" DATE NOT NULL,
	"place" VARCHAR(50) NOT NULL,
	FOREIGN KEY ("tag") REFERENCES tag ("id")
) WITH (
  OIDS=FALSE
);





INSERT INTO tag (title)
VALUES 
       (                 'Party'),
       (                 'Deadline'),
       (                 'Relax');
       

INSERT INTO meeting (topic , tag,  date,place)
VALUES 
       (                 'Team biulding',1,'2020-01-01','Raccon City' ),
       (                 'Working',2,'2010-01-01','Mincsk' ),
       (                 'Team biulding',1,'2000-01-01','Moscow' );

select * from tag;
select * from meeting
