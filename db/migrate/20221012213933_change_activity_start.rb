class ChangeActivityStart < ActiveRecord::Migration[7.0]
  def change
    remove_column :activities, :start_time, :start_date
    add_column :activities, :start_time, :datetime

  end
end
