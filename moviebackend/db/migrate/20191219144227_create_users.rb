class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :username
      t.string :password_digest
      t.string :cc_number
      t.string :cc_s_code

      t.timestamps
    end
  end
end
