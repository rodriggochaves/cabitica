class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  CJR_EMAIL_REGEX = /[\w+\-.]+@cjr\.org\.br+/i
  validates :email, presence: true, length: { maximum: 255 },
            format: { with: CJR_EMAIL_REGEX }, 
            uniqueness: { case_sensitive: false }

  has_many :tasks, dependent: :destroy
  has_many :habits, dependent: :destroy
end
