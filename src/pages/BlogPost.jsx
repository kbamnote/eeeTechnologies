import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find blog by ID
    const post = blogPosts.find((item) => item.id === Number(id));
    
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // If blog not found
    if (!post) {
        return (
            <div className="p-10 text-center min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC]">
                <h2 className="text-2xl font-bold mb-4 text-[#0A2540]">Blog not found</h2>
                <button
                    onClick={() => navigate(-1)}
                    className="text-[#3B82F6] font-medium hover:underline flex items-center gap-2"
                >
                    <ArrowLeft size={16} />
                    Back to Blog
                </button>
            </div>
        );
    }

    return (
        <main className="bg-[#F8FAFC] min-h-screen py-24">
             {/* Back Button Container */}
             <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
                <button
                    onClick={() => navigate(-1)}
                    className="group flex items-center text-[#1F2937]/70 hover:text-[#3B82F6] font-medium transition-colors"
                >
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </button>
            </div>

            <article className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#3B82F6]/10">

                {/* ================= BLOG HEADER ================= */}
                <header className="mb-10 text-center">
                    {post.category && (
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] font-semibold text-sm uppercase tracking-wide mb-6">
                            {post.category}
                        </span>
                    )}

                    {post.heading && (
                        <h1 className="text-3xl sm:text-5xl font-bold text-[#0A2540] leading-tight mb-6">
                            {post.heading}
                        </h1>
                    )}
                    
                    {/* Fallback to title if heading is not present */}
                    {!post.heading && post.title && (
                         <h1 className="text-3xl sm:text-5xl font-bold text-[#0A2540] leading-tight mb-6">
                            {post.title}
                        </h1>
                    )}

                    {post.date && (
                        <div className="text-[#1F2937]/60 font-medium">
                            Published on {post.date}
                        </div>
                    )}
                </header>

                {/* ================= FEATURE IMAGE ================= */}
                {post.image && (
                    <div className="mb-12 relative group rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={post.image}
                            alt={post.heading || post.title}
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/30 to-transparent opacity-60"></div>
                    </div>
                )}

                {/* ================= INTRO PARAGRAPHS ================= */}
                <section className="prose prose-lg max-w-none prose-slate prose-headings:text-[#0A2540] prose-a:text-[#3B82F6] prose-img:rounded-2xl">
                    {post.Hparagraph1 && <p className="lead text-xl text-[#1F2937]/80">{post.Hparagraph1}</p>}
                    {post.Hparagraph2 && <p className="text-[#1F2937]/80">{post.Hparagraph2}</p>}
                </section>

                <div className="my-10 border-t border-gray-200"></div>

                {/* ================= CONTENT SECTIONS ================= */}
                <div className="prose prose-lg max-w-none prose-slate prose-headings:text-[#0A2540] prose-a:text-[#3B82F6] prose-strong:text-[#0A2540]">
                    {/* ================= SECTION 1 ================= */}
                    {post.title1 && (
                        <section className="mt-8">
                            <h2>{post.title1}</h2>
                            {post.Tparagraph1 && <p>{post.Tparagraph1}</p>}
                            {post.Tparagraph2 && <p>{post.Tparagraph2}</p>}
                        </section>
                    )}

                    {/* ================= SECTION 2 ================= */}
                    {post.title2 && (
                        <section className="mt-8">
                            <h2>{post.title2}</h2>

                            {post.subtitle21 && (
                                <div className="ml-4 border-l-4 border-[#3B82F6] pl-6 my-6">
                                    <h3>{post.subtitle21}</h3>
                                    <p>{post.paragraph21}</p>
                                </div>
                            )}

                            {post.subtitle22 && (
                                <div className="ml-4 border-l-4 border-[#3B82F6] pl-6 my-6">
                                    <h3>{post.subtitle22}</h3>
                                    <p>{post.paragraph22}</p>
                                </div>
                            )}

                            {post.subtitle23 && (
                                <div className="ml-4 border-l-4 border-[#3B82F6] pl-6 my-6">
                                    <h3>{post.subtitle23}</h3>
                                    <p>{post.paragraph23}</p>
                                </div>
                            )}

                            {post.subtitle24 && (
                                <div className="ml-4 border-l-4 border-[#3B82F6] pl-6 my-6">
                                    <h3>{post.subtitle24}</h3>
                                    <p>{post.paragraph24}</p>
                                </div>
                            )}
                            
                            {/* Fallback for paragraphs without subtitles */}
                             {!post.subtitle21 && post.Tparagraph2 && (
                                <p>{post.Tparagraph2}</p>
                            )}

                        </section>
                    )}

                    {/* ================= CAREER ROLES ================= */}
                    {post.title3 && (
                        <section className="mt-8">
                            <h2>{post.title3}</h2>
                            {post.titleparagraph3 && <p>{post.titleparagraph3}</p>}

                            <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                                {post.bullettitle31 && (
                                    <li className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100">
                                        <strong className="block text-[#3B82F6] mb-2">{post.bullettitle31}</strong> 
                                        {post.bulletparagraph31}
                                    </li>
                                )}
                                {post.bullettitle32 && (
                                    <li className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100">
                                        <strong className="block text-[#3B82F6] mb-2">{post.bullettitle32}</strong> 
                                        {post.bulletparagraph32}
                                    </li>
                                )}
                                {post.bullettitle33 && (
                                    <li className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100">
                                        <strong className="block text-[#3B82F6] mb-2">{post.bullettitle33}</strong> 
                                        {post.bulletparagraph33}
                                    </li>
                                )}
                                {post.bullettitle34 && (
                                    <li className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100">
                                        <strong className="block text-[#3B82F6] mb-2">{post.bullettitle34}</strong> 
                                        {post.bulletparagraph34}
                                    </li>
                                )}
                                {post.bullettitle35 && (
                                    <li className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100">
                                        <strong className="block text-[#3B82F6] mb-2">{post.bullettitle35}</strong> 
                                        {post.bulletparagraph35}
                                    </li>
                                )}
                                
                                {/* Subtitles as list items for API/DB structure variation */}
                                {post.subtitle31 && (
                                     <li className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100">
                                        <strong className="block text-[#3B82F6] mb-2">{post.subtitle31}</strong> 
                                        {post.paragraph31}
                                    </li>
                                )}
                                {post.subtitle32 && (
                                     <li className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100">
                                        <strong className="block text-[#3B82F6] mb-2">{post.subtitle32}</strong> 
                                        {post.paragraph32}
                                    </li>
                                )}
                                 {post.subtitle33 && (
                                     <li className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100">
                                        <strong className="block text-[#3B82F6] mb-2">{post.subtitle33}</strong> 
                                        {post.paragraph33}
                                    </li>
                                )}
                            </ul>
                        </section>
                    )}
                    
                     {/* ================= SKILLS ================= */}
                    {post.title4 && (
                        <section className="mt-8">
                            <h2>{post.title4}</h2>
                            {post.titleparagraph4 && <p>{post.titleparagraph4}</p>}

                            <ul className="space-y-4 list-none pl-0">
                                {post.bullettitle41 && (
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#06B6D4]/20 flex items-center justify-center text-[#06B6D4] mt-1 mr-3">✓</span>
                                        <span><strong className="text-[#0A2540]">{post.bullettitle41}:</strong> {post.bulletparagraph41}</span>
                                    </li>
                                )}
                                {post.bullettitle42 && (
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#06B6D4]/20 flex items-center justify-center text-[#06B6D4] mt-1 mr-3">✓</span>
                                        <span><strong className="text-[#0A2540]">{post.bullettitle42}:</strong> {post.bulletparagraph42}</span>
                                    </li>
                                )}
                                {post.bullettitle43 && (
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#06B6D4]/20 flex items-center justify-center text-[#06B6D4] mt-1 mr-3">✓</span>
                                        <span><strong className="text-[#0A2540]">{post.bullettitle43}:</strong> {post.bulletparagraph43}</span>
                                    </li>
                                )}
                                {post.bullettitle44 && (
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#06B6D4]/20 flex items-center justify-center text-[#06B6D4] mt-1 mr-3">✓</span>
                                        <span><strong className="text-[#0A2540]">{post.bullettitle44}:</strong> {post.bulletparagraph44}</span>
                                    </li>
                                )}
                                {post.bullettitle45 && (
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#06B6D4]/20 flex items-center justify-center text-[#06B6D4] mt-1 mr-3">✓</span>
                                        <span><strong className="text-[#0A2540]">{post.bullettitle45}:</strong> {post.bulletparagraph45}</span>
                                    </li>
                                )}
                            </ul>
                        </section>
                    )}

                    {/* ================= FUTURE GROWTH / OUTLOOK ================= */}
                    {post.title5 && (
                        <section className="mt-8 bg-[#F0F9FF] p-8 rounded-2xl border border-[#3B82F6]/20">
                            <h2 className="text-[#3B82F6] mt-0">{post.title5}</h2>
                            {post.titleparagraph51 && <p className="mb-4">{post.titleparagraph51}</p>}
                            {post.titleparagraph52 && <p>{post.titleparagraph52}</p>}
                            
                            {post.subtitle4 && (
                                 <>
                                    <h3 className="text-[#0A2540]">{post.subtitle4}</h3>
                                    {post.subtitleparagraph4 && <p>{post.subtitleparagraph4}</p>}
                                 </>
                            )}
                            
                             <ul className="list-disc pl-5 space-y-2">
                                {post.bulletsubtitle41 && <li><strong>{post.bulletsubtitle41}:</strong> {post.bulletparagraph41}</li>}
                                {post.bulletsubtitle42 && <li><strong>{post.bulletsubtitle42}:</strong> {post.bulletparagraph42}</li>}
                                {post.bulletsubtitle43 && <li><strong>{post.bulletsubtitle43}:</strong> {post.bulletparagraph43}</li>}
                                {post.bulletsubtitle44 && <li><strong>{post.bulletsubtitle44}:</strong> {post.bulletparagraph44}</li>}
                            </ul>

                        </section>
                    )}

                    {/* ================= FINAL SUMMARY ================= */}
                    {post.summarytitle && (
                        <section className="mt-12 text-center">
                            <h2 className="text-3xl font-bold text-[#0A2540]">{post.summarytitle}</h2>
                            {post.summaryparagraph1 && <p className="text-xl text-[#1F2937]/80 italic border-l-4 border-[#06B6D4] pl-6 py-2 bg-gray-50 rounded-r-xl text-left my-8">{post.summaryparagraph1}</p>}
                            {post.summaryparagraph2 && <p className="text-lg">{post.summaryparagraph2}</p>}
                        </section>
                    )}
                </div>

                {/* ================= BACK LINK ================= */}
                <div className="mt-16 flex justify-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-8 py-3 bg-[#0A2540] text-white rounded-xl hover:bg-[#3B82F6] transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Back to All Articles
                    </button>

                </div>

            </article>
        </main>
    );
};

export default BlogPost;