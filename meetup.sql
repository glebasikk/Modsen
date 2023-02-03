


CREATE TABLE "meetings" (
	"id" BIGSERIAL NOT NULL PRIMARY KEY ,
	"topic" VARCHAR(50) NOT NULL,
	"tag" VARCHAR(50) NOT NULL,
	"date" DATE NOT NULL,
	"place" VARCHAR(50) NOT NULL
);


CREATE TABLE "users" (
	id 				 BIGSERIAL NOT NULL PRIMARY KEY ,
	username	 			varchar(50) 	NOT NULL,
	password 	 		varchar(255) 	NOT NULL,
	role 				varchar(50) 	NOT NULL
	
);

CREATE TABLE "guests" (
	id 				 BIGSERIAL NOT NULL PRIMARY KEY ,
	user_id	 			INTEGER NOT NULL,
	meeting_id 	 		INTEGER	 NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (meeting_id) REFERENCES meetings (id) ON DELETE CASCADE ON UPDATE CASCADE
);



INSERT INTO meetings (topic , tag,  date,place)
VALUES 
       (                 'Team biulding','fun','2020-01-01','Raccon City' ),
       (                 'Working','work','2010-01-01','Mincsk' ),
       (                 'Team biulding','fun','2000-01-01','Moscow' );


select * from meetings;
