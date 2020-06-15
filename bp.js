// Schema::create('users', function (Blueprint $table) {
//     // Identifications
//     $table->uuid('id')->primary();
//     $table->string('email', 100)->unique();

//     // Properties
//     $table->string('name', 50)->unique();
//     $table->timestamp('email_verified_at')->nullable();
//     $table->string('password', 100);
//     $table->rememberToken();
//     $table->date('birth_date')->nullable();
//     $table->year('birth_year')->nullable();
//     $table->string('phone', 25)->nullable();
//     $table->string('picture', 255)->nullable();
//     $table->mediumText('description')->nullable();
//     $table->string('provider', 100)->nullable()->default('application');
//     $table->string('provider_id', 100)->nullable();


//     // Status
//     $table->boolean('blocked')->default(false);
//     $table->integer('points')->default(0);
//     $table->string('rank', 50)->default('User');
//     $table->unsignedSmallInteger('flag')->default(0);
//     $table->uuid('created_by')->nullable();
//     $table->uuid('updated_by')->nullable();
//     $table->uuid('deleted_by')->nullable();
//     $table->timestamps();
//     $table->softDeletes();
// });

// Schema::create('petitions', function (Blueprint $table) {
//     // Identifications
//     $table->uuid('id')->primary();
//     $table->uuid('user_id');
//     $table->string('user_email', 100);

//     // Properties
//     $table->text('message')->nullable();

//     // Status
//     $table->boolean('sent')->default(false);
   
// });