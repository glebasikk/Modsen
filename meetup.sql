


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


CREATE TABLE "sessions" (
	id 				 BIGSERIAL NOT NULL PRIMARY KEY ,
	user_id	 			INTEGER NOT NULL,
	token	 			varchar(50) 	NOT NULL,
	rtoken 	 		varchar(255) 	NOT NULL
	
);

CREATE TABLE "guests" (
	id 				 BIGSERIAL NOT NULL PRIMARY KEY ,
	user_id	 			INTEGER NOT NULL,
	meeting_id 	 		INTEGER	 NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (meeting_id) REFERENCES meetings (id) ON DELETE CASCADE ON UPDATE CASCADE
);



INSERT INTO meetings VALUES 
       (               1,  'Team biulding','fun','2020-01-01','Raccon City' ),
       (                2, 'Working','work','2010-01-01','Minsk' ),
       (                3, 'Team biulding','fun','2000-01-01','Moscow' );
	   
INSERT INTO users VALUES 
       (               1,  'user','user','user' ),
	   (               6,  'ADMIN','$2b$05$O7PPf9OSsHkcYldZLFXcr.EXLZgWSkR24E.hWOZn/VF450WqDdEXu','admin' ),
       (                2, 'admin','admin','admin' );
	   
INSERT INTO guests VALUES 
       (               1,  1,1 ),
	   (               2,  1,2 ),
       (                3, 2,3 );
       


select * from meetings;
