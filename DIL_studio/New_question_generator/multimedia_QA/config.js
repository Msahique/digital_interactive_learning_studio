// this file contains configuration global paramters with settings that control behavious of all other modules:

var summary_config=
{   log_description:true,
    log_question:true,
    log_options:true,
    log_correct_answers:true,
    log_user_answers:true
}
var speech_config=
{   stt:"on",//"off"
    sttengine:"webkit",//"vosk",//"webkit",//"vosk"
    language:"english",//"english",//"english",// "german"
    model_path:"eng_model",//"eng_model","german_model"
    tts:"on",//"off"
    tts_engine: "SpeechSynthesisUtterance",//
    learn_command:"on",//"off"
    learn_option_alias:"on",//"off"
    commands_filepath:"./",
    voskpython_endpoint:"http://127.0.0.1:5000/getText"
}
var presentation_config=
{   QA_filepath:"./",
    results_filepath:"./",
    content_filepath:"./content/"
}

