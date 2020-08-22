create table if not exists mosii.role (
    uid     uuid            not null
        constraint role_pkey primary key,
    role    varchar(255),
    start_coord_x   int     not null default 0,
    start_coord_y   int     not null default 0
)