


CREATE TABLE "meetings" (
	"id" BIGSERIAL NOT NULL PRIMARY KEY ,
	"topic" VARCHAR(50) NOT NULL,
	"tag" VARCHAR(50) NOT NULL,
	"date" DATE NOT NULL,
	"place" VARCHAR(50) NOT NULL
) WITH (
  OIDS=FALSE
);






INSERT INTO meetings (topic , tag,  date,place)
VALUES 
       (                 'Team biulding','fun','2020-01-01','Raccon City' ),
       (                 'Working','work','2010-01-01','Mincsk' ),
       (                 'Team biulding','fun','2000-01-01','Moscow' );


select * from meetings;
