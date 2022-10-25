class ChangeActivitiyType < ActiveRecord::Migration[7.0]
  def change
    remove_column :activities, :type, :text
    add_column :activities, :type, :integer
  end
end
