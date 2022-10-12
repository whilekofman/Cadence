class ChangeActivityStart < ActiveRecord::Migration[7.0]
  def change
    rename_column :activities, :start_time, :start_date
    add_column :activities, :start_time, :time

  end
end
