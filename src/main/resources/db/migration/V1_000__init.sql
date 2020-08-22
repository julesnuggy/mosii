create table if not exists mosii.role (
    uid             uuid            not null
        constraint role_pkey primary key,
role            varchar(255)        not null,
    start_coord_x   int             not null default 0,
    start_coord_y   int             not null default 0
);

create table if not exists mosii.character (
    uid     uuid            not null
        constraint character_pkey primary key,
    name        varchar(255)    not null,
    role_uid    uuid            not null,
    level       int             not null default 1,
    pronoun     varchar(255)    not null,
        constraint character_role_fkey
            foreign key (role_uid) references mosii.role
);