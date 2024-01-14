from sqlalchemy import ForeignKey
from sqlalchemy import Column, String, Integer
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Customers(Base):
    __tablename__ = 'customers'
    customer_id = Column(String, primary_key=True)
    customer_name = Column(String)
    age = Column(Integer)
    gender = Column(String)
    career_l1 = Column(String)
    career_s1 = Column(String)
    career_length1 = Column(Integer)
    career_l2 = Column(String)
    career_s2 = Column(String)
    career_length2 = Column(Integer)
    qualification_1 = Column(String)
    qualification_2 = Column(String)
    skill_l1 = Column(String)
    skill_s1 = Column(String)
    skill_l2 = Column(String)
    skill_s2 = Column(String)

class Materials(Base):
    __tablename__ = 'materials'
    id = Column(Integer, primary_key=True)
    category_id = Column(Integer)
    category = Column(String)
    link = Column(String)
    big_title = Column(String)
    image = Column(String)
    level = Column(Integer)
    lecture_link = Column(String)
    middle_titles = Column(String)
    lecture_time = Column(Integer)
    teacher_name = Column(String)
    teacher_post = Column(String)
    teacher_profile = Column(String)
    related_words = Column(String)