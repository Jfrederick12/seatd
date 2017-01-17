class Employee < ActiveRecord::Base
  belongs_to  :business
  has_many  :services
  has_many  :categories, through: :services
  has_many  :appointments
  has_many  :clients, through: :appointments

  validates :name, :description, :photo, :business_id, {presence: true}

  def has_current_appointments?
    if has_appointments?
      self.appointments.each do |appt|
        if DateTime.parse(appt.start_time.to_s) <= 2.days.from_now
          return true
        end
      end
    end
  end

  def has_appointments?
      self.appointments.length > 0
  end

  def today_or_after?
    Date.parse(self.appointment.start_time.to_s) >= Date.parse(Date.today.to_s)
  end

end
