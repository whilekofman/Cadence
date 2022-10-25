class RemoveActivitiyDescriptionNull < ActiveRecord::Migration[7.0]
  def change
    remove_column :activities, :description, :text
    add_column :activities, :description, :text

  end
end
