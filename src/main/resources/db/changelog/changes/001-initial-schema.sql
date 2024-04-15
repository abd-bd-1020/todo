CREATE TABLE IF NOT EXISTS todo (
    id  PRIMARY KEY,
    is_starred BOOLEAN,
    is_done BOOLEAN,
    description TEXT,
    title TEXT

);