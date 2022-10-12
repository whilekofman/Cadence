class AddActivityStart < ActiveRecord::Migration[7.0]
  def change
    add_column :activities, :start_time, :date
  end
end
